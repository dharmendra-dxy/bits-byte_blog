import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { Avatar } from '../ui/avatar'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { getArticlesByQuery } from '@/lib/query/getArticlesByQuery'
import NoArticleFound from './NoArticleFound'
import Link from 'next/link'

type AllArticlesSectionProps = {
    searchText: string,
}

const AllArticlesSection:React.FC<AllArticlesSectionProps> = async ({searchText}) => {

    const articles = await getArticlesByQuery(searchText);

    if(articles.length<=0){
        return <NoArticleFound/>
    }


  return (
    <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {
            articles.map((article) => (
            <Link href={`/articles/${article.id}`}>
                <Card
                key={article.id}
                className='group relative overflow-hidden translate-all hover:scale-[1.02] transition-all border border-gray-400 dark:border-gray-700'
                >
                <div className='p-6 '>
                    <div className='relative mb-4 h-48 w-full overflow-hidden rounded-xl'>
                        <Image
                            src={article.featuredImage}
                            alt='article image'
                            fill
                            className='object-cover'
                        />
                    </div>

                    <h2 className='text-xl font-semibold'>{article.title}</h2>
                    <p className='mt-1 text-gray-400 dark:text-gray-500'>{article.category}</p>

                    <div className='mt-6 flex items-center justify-between'>
                        <div className='flex items-center gap-3 '>
                            <Avatar className='bg-gray-200 dark:bg-gray-700 h-9 w-9 flex items-center justify-center cursor-pointer'>
                                <AvatarImage src={article.author.imageUrl || ""}/>
                                <AvatarFallback>{article.author.name[0]}</AvatarFallback>
                            </Avatar>

                            <span className='text-md'>{article.author.name}</span>
                        </div>

                        <div className='text-sm text-gray-600 dark:text-gray-300'>
                            <p>{article.createdAt.toDateString()}</p>
                        </div>
                    </div>
                </div>
                </Card>
            </Link>

        ))}
    </div>
  )
}

export default AllArticlesSection