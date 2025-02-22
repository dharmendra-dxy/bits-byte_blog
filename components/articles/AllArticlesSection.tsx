import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { Avatar } from '../ui/avatar'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

const AllArticlesSection = () => {
  return (
    <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>

        <Card
        className='group relative overflow-hidden translate-all hover:shadow-lg'
        >
            <div className='p-6 '>
                <div className='relative mb-4 h-48 w-full overflow-hidden rounded-xl'>
                    <Image
                        src='https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt='article image'
                        fill
                        className='object-cover'
                    />
                </div>

                <h2 className='text-xl font-semibold'> Article content- Top marking rules</h2>
                <p className='mt-1 text-gray-400 dark:text-gray-500'>Web Development </p>

                <div className='mt-6 flex items-center justify-between'>
                    <div className='flex items-center gap-3 '>
                        <Avatar className='bg-gray-200 dark:bg-gray-700 h-9 w-9 flex items-center justify-center'>
                            <AvatarImage src=""/>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                        <span className='text-md'>Dharmendra</span>
                    </div>

                    <div className='text-sm text-gray-600 dark:text-gray-300'>
                        <p>12 Feb 2025</p>
                    </div>
                </div>
            </div>
        </Card>

    </div>
  )
}

export default AllArticlesSection