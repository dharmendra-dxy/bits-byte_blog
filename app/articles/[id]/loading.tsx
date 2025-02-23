import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

const loading = () => {
  return (
    <div className="flex flex-col gap-4 mx-auto mt-20 max-w-3xl px-2">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-6 w-[50%]" />

        <div>
        <Skeleton className="h-[400px] w-full rounded-lg mt-10" />
        <Skeleton className="h-4 w-[full] mt-10" />
        <Skeleton className="h-4 w-[full] mt-5" />
        <Skeleton className="h-4 w-[50%] mt-5" />
        </div>
      
    </div>
  )
}

export default loading