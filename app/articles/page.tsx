import AllArticlesSection from '@/components/articles/AllArticlesSection'
import ArticleSearchInput from '@/components/articles/ArticleSearchInput'
import { Button } from '@/components/ui/button'
import { MoveLeft, MoveRight } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <main className='min-h-screen bg-background'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>

            {/* Page Header */}
            <div className='mb-12 mt-4 space-y-6 text-center'>
                <h1 className='text-4xl font-bold sm:text-5xl'>All Articles</h1>
                
                {/* search bar: */}
                <ArticleSearchInput/>
            </div>

            {/* Display all articles here: */}
            <AllArticlesSection/>


            {/* Pagination  */}
            
            <div className='mt-12 flex justify-center gap-2'>
                <Button variant="ghost"> <MoveLeft size='sm'/> Prev</Button>
                <Button variant="ghost">1</Button>
                <Button variant="ghost">2</Button>
                <Button variant="ghost">3</Button>
                <Button variant="ghost">Next <MoveRight size='sm'/></Button>

            </div>

        </div>
    </main>
  )
}

export default page