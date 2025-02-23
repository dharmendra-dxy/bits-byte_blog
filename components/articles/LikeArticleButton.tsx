"use client"

import React, { useOptimistic, useTransition } from 'react'
import { Button } from '../ui/button'
import { Bookmark, Share2, ThumbsUp } from 'lucide-react'
import { likeDislikeToggle } from '@/actions/likeDislike'
import { Like } from '@prisma/client'

type LikeButtonProps = {
    articleId: string,
    likes: Like[],
    isLiked: boolean,
}

const LikeArticleButton: React.FC<LikeButtonProps> = ({articleId, likes,isLiked}) => {

    // optimistic hook to get like update instantly:
    const [optimisticLike,setOptimisticLike] = useOptimistic(likes.length);
    const [isPending, startTransition] = useTransition();

    const handleLikeDislike = async()=>{
        startTransition(async()=>{
            setOptimisticLike(isLiked ? optimisticLike-1 : optimisticLike+1);
            await likeDislikeToggle(articleId);
        })
    }

  return (
    <section className='mb-6 flex gap-4 '>
        <form className='flec gap-3' action={handleLikeDislike}>

            <Button variant='ghost' type='submit' disabled={isPending}>
                <ThumbsUp className='h-5 w-5 '/>
                {optimisticLike}
            </Button>

        </form>

        <Button variant='ghost'>
            <Bookmark className='h-5 w-5 '/>
            Save
        </Button>

        <Button variant='ghost'>
            <Share2 className='h-5 w-5 '/>
            Share
        </Button>
        
    </section>
  )
}

export default LikeArticleButton