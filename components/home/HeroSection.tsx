import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className='relative min-h-[600px] w-full overflow-hidden'>
        <div className='container relative mx-auto h-full flex flex-col md:flex-row px-4 sm:px-6 lg:px-8 py-24 md:py-32'>

            <div className='flex-1 space-y-8 text-center md:text-left '>
                <h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl'>
                    Explore the world 
                    through 
                    <span className='bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent'> 
                        {" "}Words
                    </span>
                </h1>
                <p className='text-lg md:text-xl text-gray-700 dark:text-gray-400'>
                    Discover insightful article, thought-provoking stories, and experts perspective on technology, lifestyle and inovations.
                </p>

                <div className='flex flex-col items-center gap-4 sm:flex-row md:justify-start'>
                    <Link href='/articles'>
                        <Button className='rounded-full'>Start Reading</Button>
                    </Link>
                    <Link href='/articles'>
                        <Button className='rounded-full' variant='outline'>Explore Topics</Button>
                    </Link>
                </div>

                <div className='grid grid-cols-3 gap-4 pt-8 md:max-w-md'>
                    <div className='space-y-2'>
                        <div className='text-2xl font-bold text-primary'>
                            1K+
                        </div>
                        <div className='text-sm text-gray-700 dark:text-gray-400'>Puvlished articles</div>
                    </div>

                    <div className='space-y-2'>
                        <div className='text-2xl font-bold text-primary'>
                            50+
                        </div>
                        <div className='text-sm text-gray-700 dark:text-gray-400'>Expert Writers</div>
                    </div>

                    <div className='space-y-2'>
                        <div className='text-2xl font-bold text-primary'>
                            10M
                        </div>
                        <div className='text-sm text-gray-700 dark:text-gray-400'>Monthly Readers</div>
                    </div>

                </div>

                
            </div>

            {/* image */}
            <div className='flex-1 mt-12 lg:mt-0'>
                    <div className={cn('relative mx-auto w-64 h-64 lg:w-96 lg:h-96 rounded-2xl overflow-hidden', 'bg-gradient-to-br from-white/5 to-transparent', 'border border-primary/20 backdrop-blur-lg', "shadow-2xl")}>
                        
                        <Image
                           src='https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                           className='object-cover'
                           alt='heroimg'
                           fill
                        />

                    </div>
            </div>
            
        </div>
    </section>
  )
}

export default HeroSection