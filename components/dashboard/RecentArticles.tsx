import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import {MoveRight, SquarePen, Trash2} from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import Link from 'next/link'
import { Badge } from '../ui/badge'

const RecentArticles = () => {
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
                    <TableRow>
                        <TableCell> Way to earn money- 50 hit and trail methods</TableCell>
                        <TableCell>
                            <Badge variant="secondary"
                            className='bg-green-500 text-black'
                            >Published</Badge>
                        </TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>14 February 2025</TableCell>
                        <TableCell>
                            <div className='flex gap-2'>
                                <Link href={`/dashboard/articles/${123}/edit`}>
                                <Button size='sm' variant='outline'><SquarePen/>Edit</Button>
                                </Link>
                                <Link href={`/dashboard/articles/${123}/delete`}>
                                <Button size='sm' variant='outline'><Trash2/>Delete</Button>
                                </Link>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CardContent>

    </Card>
  )
}

export default RecentArticles;

