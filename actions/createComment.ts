"use server"

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import {z} from "zod";

const createCommentSchema = z.object({
    body: z.string().min(1).max(200),
})

type createCommentFormState = {
    errors: {
        body?: string[],
        formError?: string[], 
    }
}

export const createComment = 
async (articleId: string, prevState: createCommentFormState ,formData: FormData): 
Promise<createCommentFormState> => {
    const result = createCommentSchema.safeParse({body: formData.get('body')});

    if(!result.success){
        return {
            errors: result.error.flatten().fieldErrors,
        }
    }

    const {userId} = await auth();

    if(!userId){
        return {
            errors: {
                formError: ['You need to login before adding a comment'],
            },
        }
    }

    const exsisitingUser = await prisma.user.findUnique({
        where: {clerkUserId: userId},
    });

    if(!exsisitingUser){
        return {
            errors: {
                formError: ['No user found. Please login/signup'],
            },
        }
    }

    try {
        await prisma.comment.create({
            data: {
                content: result.data.body,
                authorId: exsisitingUser.id,
                articleId,
            }
        });
    } catch (error:unknown) {
        if(error instanceof Error){
            return {
                errors: {
                    formError: [error.message],
                }
            }
        }
        else{
            return {
                errors: {
                    formError: ["Some internal error occured while adding comment"],
                }
            }
        }
    }

    revalidatePath(`/articles/${articleId}`);
    return {errors:{}};


}