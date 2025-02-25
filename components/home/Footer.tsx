import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { Linkedin, Github, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background dark:border-gray-500 border-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Branding Section */}
          <div className="md:col-span-2 lg:col-span-2">
            <h2 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Bits
              </span>
              <span className="text-foreground">&Byte</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Where ideas meet innovation. Dive into a world of insightful 
              articles written by passionate thinkers and industry experts.
            </p>
            
            <div className="mt-6 flex gap-2">
              <a target="_blank" href='https://x.com/dharmendra_dxy?t=tyBsnxMapImcCLSM6TIDww&s=09'>
                <Button variant="ghost" size="icon">
                  <Twitter className="h-5 w-5 text-muted-foreground" />
                </Button>
              </a>

              <a target="_blank" href='https://github.com/dharmendra-dxy'>
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5 text-muted-foreground" />
                </Button>
              </a>
              
              <a target="_blank" href='https://www.linkedin.com/in/dharmendra-yadav-a2a5b7290'>  
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5 text-muted-foreground" />
                </Button>
              </a>
              
              
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Explore</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">All Articles</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Topics</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Authors</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Podcasts</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Licenses</a></li>
            </ul>
          </div>

          
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ByteCode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}