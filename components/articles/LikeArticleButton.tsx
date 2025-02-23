import React from 'react'
import { Button } from '../ui/button'
import { Bookmark, Share2, ThumbsUp } from 'lucide-react'

const LikeArticleButton = () => {
  return (
    <section className='mb-6 flex gap-4 '>
        <form className='flec gap-3'>
            <Button variant='ghost'>
                <ThumbsUp className='h-5 w-5 '/>
            </Button>
        </form>

        <Button variant='ghost'>
            <Bookmark className='h-5 w-5 '/>
        </Button>

        <Button variant='ghost'>
            <Share2 className='h-5 w-5 '/>
        </Button>
        
    </section>
  )
}

export default LikeArticleButton