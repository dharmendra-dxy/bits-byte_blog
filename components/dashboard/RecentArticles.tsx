import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import {MoveRight, SquarePen, Trash2} from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import { Prisma } from '@prisma/client'

type recentArticleProps = {
    articles:Prisma.ArticlesGetPayload<{
        include: {
            comments: true,
            author:{
                select:{
                    name: true,
                    email: true,
                    imageUrl: true,
                },
            },
        }
    }>[]
}

const RecentArticles: React.FC<recentArticleProps> = ({articles}) => {
  return (
    <Card className='mb-8 mt-8'>
        <CardHeader>
            <div className='flex items-center justify-between'>
                <CardTitle>Recent Articles</CardTitle>
                <Button 
                size='sm'
                variant='outline'

                className='text-muted-foreground'
                >View All <MoveRight/> </Button>
            </div>
        </CardHeader>

        {
            !articles.length ? ( 
                <CardContent>
                    No Articles Found
                </CardContent>
            ) : 
            (
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Comments</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                        {
                            articles.map((article)=>(
                            <TableRow key={article.id}>

                                <TableCell>{article.title}</TableCell>

                                <TableCell>
                                    <Badge variant="secondary"
                                    className='bg-green-500 text-black'
                                    >Published</Badge>
                                </TableCell>

                                <TableCell>{article.comments.length}</TableCell>

                                <TableCell>{article.createdAt.toDateString()}</TableCell>

                                <TableCell>
                                    <div className='flex gap-2'>
                                        <Link href={`/dashboard/articles/${article.id}/edit`}>
                                        <Button size='sm' variant='outline'><SquarePen/>Edit</Button>
                                        </Link>
                                        <Link href={`/dashboard/articles/${article.id}/delete`}>
                                        <Button size='sm' variant='outline'><Trash2/>Delete</Button>
                                        </Link>
                                    </div>
                                </TableCell>

                            </TableRow>
                                
                            ))
                        }
                        </TableBody>
                    </Table>
                </CardContent>
            )
        }
    
    </Card>
  )
}

export default RecentArticles;

