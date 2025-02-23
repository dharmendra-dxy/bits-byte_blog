import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'
import { Prisma } from '@prisma/client'

type ArticleCommentSection = {
    comments: Prisma.CommentGetPayload<{
        include:{
            author:{
                select:{
                    name:true,
                    email: true,
                    imageUrl: true,
                }
            }
        }
    }>[]
}

const ArticleCommentSection:React.FC<ArticleCommentSection> = ({comments}) => {
  return (
    <section className='space-y-8 mb-10'>
        {
            comments.map((comment)=> (
            <div className='flex gap-4 mb-4' key={comment.id}>

                <Avatar className='bg-gray-200 dark:bg-gray-700 h-8 w-8 flex items-center justify-center cursor-pointer rounded-full text-sm'>
                    <AvatarImage src={ comment.author.imageUrl ||""}/>
                    <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
                </Avatar>

                <div className='flex-1'>
                    <div className='mb-2 '>
                        <span className='font-medium text-gray-700 dark:text-gray-300'>
                            {comment.author.name}
                        </span>
                        <span className='text-sm ml-2 text-gray-600 dark:text-gray-400'>
                            {comment.createdAt.toDateString()}
                        </span>
                    </div>
                    <p> {comment.content} </p>
                </div>
            </div>
            ))
        }


        

    </section>
  )
}

export default ArticleCommentSection