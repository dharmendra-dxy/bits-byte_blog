'use client'

import Link from "next/link"
import { Button } from "../../ui/button";
import { ToggleMode } from "./ToggleMode";
import SearchInput from "./SearchInput";

const Navbar = () => {

    const navLinks = [
        {name: 'About', href:'/about'},
        {name: 'Articles', href:'/articles'},
        {name: 'Dashboard', href:'/dashboard'}
    ];


  return (
    <nav className='sticky top-0 z-50 w-full border-b dark:border-gray-600 bg-white dark:bg-black'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex h-16 items-center justify-between'>

                {/* left portion: */}

                <div className='flex items-center gap-8'>
                    <Link href='/'>
                        <span className="font-bold text-2xl">
                            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">Byte</span> 
                            <span>Code</span>
                        </span>
                        
                    </Link>
                </div>

                {/* desktop view: only for desktop*/}

                <div className="hidden lg:flex items-center gap-4">
                    {
                      navLinks.map((item)=> (
                        <Link 
                        key={item.name} 
                        href={item.href}
                        className="hover:text-gray-600"
                        >
                            {item.name}
                        </Link>
                      ))  
                    }

                </div>

                {/* right section: */}
                <div className="flex items-center gap-4">  
                    <SearchInput/> 
                    <ToggleMode/>
                    <div className="hidden lg:flex items-center gap-4">
                        <Button>Login</Button>
                        <Button>Signup</Button>
                    </div>
                </div>
                


            </div>
        </div>
    </nav>
  )
}

export default Navbar