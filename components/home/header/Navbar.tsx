"use client";

import Link from "next/link";
import { Button } from "../../ui/button";
import { ToggleMode } from "./ToggleMode";
import SearchInput from "./SearchInput";
import { useState } from "react";
import { Menu, Search, X } from "lucide-react"
import { Input } from "@/components/ui/input";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [isMobileNav, setIsMobileNav] = useState(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Articles", href: "/articles" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b dark:border-gray-600 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* left portion: */}
          <div className="flex items-center gap-8">
            <Link href="/">
              <span className="font-bold text-2xl">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Bits
                </span>
                <span>&Byte</span>
              </span>
            </Link>
          </div>

          {/* desktop view: only for desktop*/}
          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-gray-600"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* right section: */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex gap-4">
              <SearchInput />
                <ToggleMode />
            </div>

            {/* user action for authentication" */}
            <div className="hidden lg:flex">
            <SignedIn>
              <UserButton/>
            </SignedIn>
            </div>

            <SignedOut>
              <div className="hidden lg:flex items-center gap-4">
                <SignInButton>
                  <Button variant='outline'>Login</Button>
                </SignInButton>

                <SignUpButton>
                  <Button >Signup</Button>
                </SignUpButton>
              </div>
            </SignedOut>

            
          </div>
          
          {/* mobile Nav */}
          <div className="flex items-center justify-between lg:hidden">

            <div className="lg:hidden">
              <SignedIn>
                <UserButton/>
              </SignedIn>
            </div>
          
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-muted-foreground hover:text-foreground"
              onClick={() => setIsMobileNav((prev) => !prev)}
            >
              

              {isMobileNav ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>

        </div>
      </div>


      {/* mobile menu when isMobileNav*/}
      {isMobileNav && (
        <div className="lg:hidden py-4 space-y-4 border-t">
          {/* Search Bar (Mobile) */}
          <div className="px-4 w-full">
            <SearchInput />
            <div className="mt-2">
                <ToggleMode />
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <div className="space-y-2 px-4">

            {
               navLinks.map((item)=> (
                <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-foreground"
                onClick={() => setIsMobileNav(false)}
                >
                    {item.name}
                </Link>
               )) 
            }
          </div>

          {/* Mobile Auth Buttons */}
          <SignedOut>
                <div className="px-4 flex flex-col gap-2">
                    <SignInButton>
                    <Button variant="outline" className="w-full">
                        Login
                    </Button>
                    </SignInButton>
                    <SignUpButton>
                    <Button className="w-full">Sign up</Button>
                    </SignUpButton>
                </div>
            </SignedOut>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
