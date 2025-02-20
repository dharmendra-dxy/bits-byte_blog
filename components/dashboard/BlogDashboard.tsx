import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { FileText, MessageCircle, PlusCircle, Star } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import RecentArticles from './RecentArticles'
import { prisma } from '@/lib/prisma'

const BlogDashboard = async() => {

    // get data from database:
    const [articles, totalComments] = await Promise.all([
        
        // articles:
        prisma.articles.findMany({
            orderBy: {
                createdAt: 'desc',
            },
            include:{
                comments: true,
                author: {
                    select: {
                        name: true,
                        email: true,
                        imageUrl: true,
                    }
                }
            }
        }),

        // total comment count:
        prisma.comment.count(),
    ]);

    const cardDetails = [
        {
            title:'Total Articles', 
            icon: <FileText className='h-4 w-4'/>,
            content: articles.length, 
            message: "+5 from last month"
        },
        {
            title:'Total Comments', 
            icon: <MessageCircle className='h-4 w-4'/>,
            content: totalComments, 
            message: "+12 awaiting moderation"
        },
        {
            title:'Avg. Rating', 
            icon: <Star className='h-4 w-4'/>,
            content: "4.2", 
            message: "+0.06 from last months"
        },
    ]

    
  return (
    <main className='flex-1 py-6 px-10 w-full'>

        {/* heading */}
        <div className='flex items-center justify-between mb-8 '>
            <div>
                <h1 className='font-bold text-2xl'>Blog Dashboard</h1>
                <p className='text-gray-600 dark:text-gray-400 mt-2 text-sm'>Manage your Content and Analytics</p>
            </div>

            <Link href='/dashboard/articles/create'>
                <Button>
                    <PlusCircle className='h-5 w-5'/>
                    Add Article
                </Button>
            </Link>
        </div>

        {/* quick stats: */}
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
            {
                cardDetails.map((item)=> (
                    <Card key={item.title}>
                        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                            <CardTitle className='font-medium text-sm'>
                                {item.title} 
                            </CardTitle>
                            {item.icon}
                        </CardHeader>

                        <CardContent>
                            <div className='text-2xl font-bold'>{item.content}</div>
                            <p className='text-gray-600 dark:text-gray-400 text-sm'>
                                {item.message}
                            </p>
                        </CardContent>
                    </Card>
                ))
            }
        </div>

        {/* recent Article: dispaly all the articles here */}
        <RecentArticles
        articles={articles}
        />

    </main>
  )
}

export default BlogDashboard