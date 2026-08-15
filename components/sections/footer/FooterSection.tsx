"use client"

import { Github, Linkedin } from "lucide-react"

export default function FooterSection() {
  return (
    <footer className="relative px-6 py-12 sm:px-12 lg:px-24 border-t border-line z-10" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col">
          <h2 className="font-display text-3xl font-bold tracking-tighter">AKSHDEEP SINGH</h2>
          <a href="mailto:akshdeepsingh2kk@gmail.com" className="text-muted hover:text-coral mt-2 transition-colors">akshdeepsingh2kk@gmail.com</a>
        </div>
        
        <div className="flex gap-6">
          <a href="https://github.com/its-akshdeep06" target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors p-3 border border-line rounded-full hover:border-foreground">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/its-akshdeep06" target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors p-3 border border-line rounded-full hover:border-foreground">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-line flex justify-between text-xs tracking-widest text-muted">
        <span>© 2026 AKSHDEEP SINGH</span>
        <span>MADE WITH INTENT.</span>
      </div>
    </footer>
  )
}
