"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export default function FooterSection() {
  return (
    <footer className="relative px-6 py-14 sm:px-12 lg:px-24 border-t border-white/[0.08] liquid-glass z-10" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col">
          <a href="#top" className="font-display text-2xl sm:text-3xl font-black tracking-tighter transition-colors hover:text-coral">
            AKSHDEEP SINGH
          </a>
        </div>
        
        <div className="flex gap-4">
          <a
            href="https://github.com/its-akshdeep06"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="text-muted hover:text-foreground transition-all duration-300 p-3.5 liquid-glass-pill rounded-full hover:border-coral/60 hover:bg-coral/10 hover:shadow-[0_0_20px_rgba(255,74,34,0.3)] icon-glow-smooth"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/its-akshdeep06"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="text-muted hover:text-foreground transition-all duration-300 p-3.5 liquid-glass-pill rounded-full hover:border-blue/60 hover:bg-blue/10 hover:shadow-[0_0_20px_rgba(74,144,226,0.3)] icon-glow-smooth"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:akshdeepsingh2kk@gmail.com"
            aria-label="Email Akshdeep Singh"
            className="text-muted hover:text-foreground transition-all duration-300 p-3.5 liquid-glass-pill rounded-full hover:border-coral/60 hover:bg-coral/10 hover:shadow-[0_0_20px_rgba(255,74,34,0.3)] icon-glow-smooth"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs tracking-widest text-muted">
        <span>© 2026 AKSHDEEP SINGH</span>
        <span className="font-mono text-[11px] text-muted/70">DESIGNED & BUILT WITH INTENT</span>
      </div>
    </footer>
  )
}
