'use client'

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { BarChart, FileText, LayoutDashboard, MessageCircle, Settings } from "lucide-react"
import Link from "next/link"

const LeftSidebar = ()=> {


  return (
    <div>
        <Sheet>
            <SheetTrigger asChild>
                <Button variant='outline' className="lg:hidden m-4">
                    <LayoutDashboard className="h-5 w-5"/>
                </Button>
            </SheetTrigger>

            <SheetContent side='left' className="w-[250px]">
                <DashboardSidebar/>
            </SheetContent>
        </Sheet>

        <div className="hidden lg:block h-screen w-[250px] border-r dark:border-gray-600">
            <DashboardSidebar/>
        </div>
    </div>
  )
}

export default LeftSidebar;

const DashboardSidebar = () => {

    const sidebarLinks = [
        {name: 'Overview', href: '/dashboard', icon:<LayoutDashboard/> },
        {name: 'Articles', href: '/dashboard/articles/create', icon:<FileText/> },
        {name: 'Comments', href: '/dashboard/comments', icon:<MessageCircle/> },
        {name: 'Analytics', href: '/dashboard/analytics', icon:<BarChart/> },
        {name: 'Setting', href: '/dashboard/setting', icon:<Settings/> },
    ]

    return (
    <div className="h-full px-4 py-6">

        <div className="flex items-center gap-2 mb-8 px-2">
            <Link href="/">
              <span className="font-bold text-2xl">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Bits
                </span>
                <span>&Byte</span>
              </span>
            </Link>
        </div>
        
        <nav>
            {
                sidebarLinks.map((item)=> (
                    <Link
                        key={item.name}
                        href={item.href}
                    >
                        <Button variant='ghost' className="w-full justify-start">
                            <div className="w-5 h-5 mr-2">{item.icon}</div>
                            {item.name}
                        </Button>
                    </Link>
                ))
            }
            
        </nav>

    </div>
    )
}