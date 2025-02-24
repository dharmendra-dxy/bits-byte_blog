import { Search } from 'lucide-react'
import React from 'react'

const NoArticleFound = () => {
  return (
    <div className='flex flex-col items-center justify-center p-8 text-center'>
        <div className='mb-4 rounded-full bg-muted p-4'>
            <Search className='h-8 w-8' />

        </div>

        <h2 className='font-bold text-xl '>
            No Result Found
        </h2>

        <p className='mt-2 '>
            We could not find any article mahing your search. Try a dfferent  keyword or phrase
        </p>
    </div>
  )
}

export default NoArticleFound