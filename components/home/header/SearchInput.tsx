"use client"

import { searchAction } from '@/actions/search'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const SearchInput = () => {

  const params = useSearchParams();

  return (
    <form action={searchAction}>
        <div className='relative w-full'>
          <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 cursor-pointer'/>
          <Input 
          type='text'
          name='search'
          defaultValue={params.get('search') || ""}
          className='pl-10 lg:w-48 focus-visible:ring-1 w-full'
          placeholder='Search Article...'
          />
        </div>
    </form>

  )
}

export default SearchInput