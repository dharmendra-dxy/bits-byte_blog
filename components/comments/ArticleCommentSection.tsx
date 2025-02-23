import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'

const ArticleCommentSection = () => {
  return (
    <section className='space-y-8'>

        <div className='flex gap-4'>

            <Avatar className='bg-gray-200 dark:bg-gray-700 h-8 w-8 flex items-center justify-center cursor-pointer rounded-full text-sm'>
                <AvatarImage src={""}/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            
            <div className='flex-1'>

                <div className='mb-2'>
                    <span className='font-medium'>Author name</span>
                    <span className='text-sm ml-2'>12 Feb</span>
                </div>
                
                <p>
                    I thing, you are saying true, but dont ou think about .. ??
                </p>
            </div>
        </div>

    </section>
  )
}

export default ArticleCommentSection