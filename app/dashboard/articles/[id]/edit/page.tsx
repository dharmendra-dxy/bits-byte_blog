import EditArticlePage from '@/components/articles/EditArticlePage'
import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'

type EditArticleParams = {
    params: Promise<{id: string}>
}

const page:React.FC<EditArticleParams> = async({params}) => {

    const articleId = (await params).id;
    const article = await prisma.articles.findUnique({
        where: {id: articleId}
    });

    if(!article){ 
        return (
            <div className='flex-col text-center gap-4 items-center justify-center w-full'>
                <h1 className='text-2xl font-semibold mt-10 mb-4'>Article Not found</h1>
                <Link href='/dashboard' >
                    <Button variant='outline'>Go Back</Button>
                </Link>
            </div>
    )}


  return (
    <div>
        <EditArticlePage article={article}/>
    </div>
  )
}

export default page