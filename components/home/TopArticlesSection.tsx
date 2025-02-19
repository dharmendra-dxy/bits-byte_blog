import React from 'react'
import { Card } from '../ui/card'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import { Avatar } from '@radix-ui/react-avatar'
import { AvatarFallback, AvatarImage } from '../ui/avatar'

const TopArticlesSection = () => {
  return (
    <div
    className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'
    >
        <Card
            className={cn('group relative overflow-hidden transition-all hover:scale-[1.02]', 'border border-gray-600 dark:border-gray-40', 'bg-white/50 backdrop-blur-lg')}
        > 

        <div className='p-6'>
            <Link href={`/articles/${123}`}>
                <div className='relative mb-4 h-48 w-full overflow-hidden rounded-xl '>
                    <Image
                        src='https://images.unsplash.com/photo-1507764923504-cd90bf7da772?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt='article img'
                        className='object-cover dark:border dark:border-gray-500'
                        fill
                    />
                </div>

                <div className='flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300'>
                    <Avatar className='h-8 w-8'>
                        <AvatarImage src=""/>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span>Dharmendra</span>
                </div>
                <h3 className='mt-4 text-xl font-semibold text-gray-900 dark:text-white '>
                    How to become a MERN Devloper in 2026
                </h3>
                <p className='mt-2 text-gray-600  dark:text-gray-400'>
                    Web Development
                </p>

                <div className='mt-6 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400'>
                    <p>12 Feb</p>
                    <p>10 min read</p>
                </div>
            </Link>
        </div>
        </Card>

        
    </div>
  )
}

export default TopArticlesSection