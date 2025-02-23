"use client"

import React, { useActionState } from 'react'
import { Input } from '../ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { createComment } from '@/actions/createComment'

type commentInputProps = {
    articleId: string,
}

const ArticleCommentInput: React.FC<commentInputProps> = ({articleId}) => {

    const  [formState, action, isPending] = 
    useActionState(createComment.bind(null,articleId), {errors: {}});

  return (
    <form action={action} className='mb-12'>

        <div className='flex gap-4 items-center'>

            <Avatar className='bg-gray-200 dark:bg-gray-700 h-8 w-8 flex items-center justify-center cursor-pointer rounded-full text-sm'>
                <AvatarImage src={""}/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className='flex gap-4 items-center w-full'>
                <Input   
                type='text'
                name='body'
                placeholder='Add a comment...'
                className='w-[80%]'
                />
                
                <div>
                    <Button type='submit'>{
                        isPending ? "Adding..." : "Add Comment"
                    }</Button>
                </div>
                
            </div>
        </div>
        <div>
        <div className='ml-12 mt-2'>
            {
                    formState.errors.body && (
                        <p className='text-red-600 text-sm'>{formState.errors.body}</p>
                    )
                }
                {
                    formState.errors.formError && (
                        <p className='text-red-600 text-sm'>{formState.errors.formError}</p>
                    )
                }
            </div>
        </div>

    </form>

  )
}

export default ArticleCommentInput