import type { Prisma } from '@prisma/client'
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar'
import React from 'react'
import { AvatarImage } from '../ui/avatar'
import Image from 'next/image'

type articlePageTypes = {
    article : Prisma.ArticlesGetPayload<{
        include: {
            author:{
                select:{
                    name: true,
                    email: true,
                    imageUrl: true,
                }
            }
        }
    }>
}

const ArticlePage:React.FC<articlePageTypes> = ({article}) => {
    
  return (
    <div className='min-h-screen bg-background'>
        <main className='container mx-auto py-12 px-4 sm:px-8 lg:px-8'>

            <article className='mx-auto max-w-3xl'>
                {/*  article header */}
                <header className='mb-10'>

                    <div className='flex flex-wrap gap-2 mb-4'>
                        <span className='text-sm bg-gray-200 px-4 py-1 rounded-full hover:bg-gray-300 dark:text-black'>
                            {article.category}
                        </span>
                    </div>

                    <h1 className='text-4xl font-bold mb-4'>
                        {article.title}
                    </h1>

                    <div className='flex items-center gap-4 w-full border-b border-gray-500 pb-4'>
                        <Avatar className='bg-gray-200 dark:bg-gray-700 h-9 w-9 flex items-center justify-center cursor-pointer rounded-full'>
                            <AvatarImage src={article.author.imageUrl || ""}/>
                            <AvatarFallback>{article.author.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className='flex items-center justify-between w-full'>
                            <p className='font-medium text-gray-500 hover:text-gray-600 cursor-pointer'>
                                {article.author.name}
                            </p>
                            <p className=' text-sm text-gray-700 dark:text-gray-300'>
                                {article.createdAt.toDateString()} , {" "}
                                {Math.floor(article.content.length/100)} min to read
                            </p>
                        </div>
                    </div>

                </header>

                <div className='mb-10 mx-auto'>
                    <Image
                        src={article.featuredImage || ""}
                        alt='article image'
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{width: "100%", height:'auto'}}
                    />
                </div>

                {/* article content: */}
                <section 
                className='mb-12 max-w-none border-b border-gray-500 pb-4'
                dangerouslySetInnerHTML={{__html:article.content}}
                >
                </section>

                {/* Like button: */}

            </article>

        </main>
    </div>
  )
}

export default ArticlePage