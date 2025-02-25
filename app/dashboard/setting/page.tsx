import { Layers } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <main>
        <section className='mt-20 mx-auto container flex flex-col items-center justify-center'>
            
            <div>
                <Layers size='48'/>
            </div>

            <h2 className='mt-4 text-xl'>
                Currently website is in developement phase
            </h2>

            <p className='mt-4 text-sm text-gray-500 '>
                This page is Currently not available. It will be created sortly
            </p>

        </section>
    </main>
  )
}

export default page