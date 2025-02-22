import ArticlePage from '@/components/articles/ArticlePage';
import { prisma } from '@/lib/prisma';
import React from 'react'

type articleDetailPageProps = {
    params: Promise<{id:string}>
}

const page: React.FC<articleDetailPageProps> = async({params}) => {

    const articleId = (await params).id;

    const article =  await prisma.articles.findUnique({
        where:{id: articleId},
        include:{
            author:{
                select: {
                    name: true,
                    email: true,
                    imageUrl: true,
                }
            }
        }
    });

    if(!article){
        return <h1 className='text-4xl mt-10 text-center'>No such article found</h1>
    }

  return (
    <div>
        <ArticlePage article={article}/>
    </div>
  )
}

export default page