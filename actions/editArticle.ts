"use server"

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {z} from "zod";
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// configure cloudinary:
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUND_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret:process.env.CLOUDINARY_API_SECRET,
});  


// for validating articles: zod
const editArticleSchema = z.object({
    title: z.string().min(3).max(100),
    category: z.string().min(3).max(50),
    content: z.string().min(10),
});

type editArticlesFormState = {
    errors: {
        title?: string[],
        category?: string[],
        featuredImage?: string[],
        content?: string[],
        formErrors?: string[],
    },

}

export const editArticle = async (articleId:string, prevState:editArticlesFormState, formData : FormData) : Promise<editArticlesFormState> => {

    const result = editArticleSchema.safeParse({
        title: formData.get('title'),
        category: formData.get('category'),
        content: formData.get('content'),
    });

    if(!result.success){
        return {
            errors: result.error.flatten().fieldErrors,
        }
    }

    // check for auth: here userId is clerkUserId as obtained from clerk
    const {userId} = await auth();
    if(!userId){
        return {
            errors: {
                formErrors: ['You need to login'],
            }
        }
    }

    // get exisiting user:
    const existingUser = await prisma.user.findUnique({
        where: {clerkUserId: userId},
    });

    // get exisiting article:
    const exisitingArticle = await prisma.articles.findUnique({
        where: {id: articleId},
    });

    if(!existingUser || existingUser.id !== exisitingArticle?.authorId ){
        return {
            errors: {
                formErrors: ['User not found. Please register before creating an article'],
            }
        }
    }

    
    if(!exisitingArticle){
        return {
            errors: {
                formErrors: ['Article not found'],
            }
        }
    }

    
    // for image file: get new image or get exisiting from the database:
    let imageUrl=exisitingArticle.featuredImage;

    const imageFile = formData.get('featuredImage') as File | null;
    if(imageFile && imageFile.name!=='undefined'){
        try {
           // upload image to cloudinary:
            const arrayBuffer = await imageFile.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            const uploadResponse:UploadApiResponse| undefined= await new Promise((resolve, reject)=>{
                const uploadStream = cloudinary.uploader.upload_stream(
                    {resource_type: 'auto'},
                    (error, result) => {
                        if(error){
                            reject(error);
                        }
                        else resolve(result);
                    }
                );
                uploadStream.end(buffer);
            }); 

            // update imageUrl if user uploads a new one:
            if(uploadResponse?.secure_url){
                imageUrl = uploadResponse?.secure_url
            }
            else{
                return {
                    errors: {
                        featuredImage: ['Failed to upload the images'],
                    }
                }
            }
        } 
        catch (error) {
            return {
                errors: {
                    featuredImage: ['Some error occured while uploading the images'],
                }
            }
        }
    }


    // update prisma article:
    try{
        await prisma.articles.update({
            where:{ id:articleId},
            data: {
                title: result.data.title,
                category: result.data.category,
                content: result.data.content,
                featuredImage: imageUrl,
            }
        });
    }
    catch(error:unknown){
        if(error instanceof Error){
            return {
                errors:{
                    formErrors: [error.message],
                }
            }
        }
        else{
            return {
                errors:{
                    formErrors: ["Some internal error occured. Please try after some times"],
                }
            }
        }
    }

    // revalidate:
    revalidatePath('/dashboard');

    // redirect finally to dashboard:
    redirect('/dashboard');
}