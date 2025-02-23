"use server"

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache";


export const likeDislikeToggle = async (articleId:string) =>{

    const {userId} = await auth();

    if(!userId){
        throw new Error("You need to login to like an artilce");
    }

    const user = await prisma.user.findUnique({
        where: {clerkUserId: userId},
    }); 

    if(!user){
        throw new Error("User does not exist. Either signin or signup"); 
    }

    const exisitingLike = await prisma.like.findFirst({
        where: {articleId, authorId:user.id}
    })

    // if existingLike: dislike , else: like

    if(exisitingLike){
        // dislike the article:
        await prisma.like.delete({
            where: {id: exisitingLike.id}
        });
    }else{
        // like the article:
        await prisma.like.create({
            data:{
                articleId,
                authorId: user.id,
            }
        })
    }

    revalidatePath(`/articles/${articleId}`);
}