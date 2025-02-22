
import { Footer } from "@/components/home/Footer";
import Navbar from "@/components/home/header/Navbar";
import HeroSection from "@/components/home/HeroSection";
import TopArticlesSection from "@/components/home/TopArticlesSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";


export default function Home() {
  return (
    <main> 
      <HeroSection/>

      <section className="relative py-16 md:py-24">
        <div className="conatiner mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">

          <div className="mb-12 text-center"> 
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white"> 
              Featured Articles
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">DIscover our most popular and trending content</p>
          </div>

          <div>
            <Suspense fallback={<h1>Loading Article</h1>}>
            <TopArticlesSection/>
            </Suspense>
          </div>

          <div className="mt-12 text-center">
            <Link href='/articles'>
              <Button className="hover:bg-white hover:text-black hover:border dark:hover:bg-black dark:hover:text-white"> 
                View All Articles
              </Button>
            </Link>
          </div>

        </div>

        
      </section>

      <Footer/>
      
    </main>
  );
}
