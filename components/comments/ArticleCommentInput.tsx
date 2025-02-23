import React from 'react'
import { Input } from '../ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'

const ArticleCommentInput = () => {
  return (
    <form className='mb-12'>

        <div className='flex gap-4 items-center'>
            <Avatar className='bg-gray-200 dark:bg-gray-700 h-8 w-8 flex items-center justify-center cursor-pointer rounded-full text-sm'>
                <AvatarImage src={""}/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className='flex gap-4 items-center w-full'>
                <Input   
                type='text'
                name='commentbody'
                placeholder='Add a comment...'
                className='w-[80%]'
                />
                <div>
                    <Button>Add Comment</Button>
                </div>
            </div>

        </div>

    </form>

  )
}

export default ArticleCommentInput