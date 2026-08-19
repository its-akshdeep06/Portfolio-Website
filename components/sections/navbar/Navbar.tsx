"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download, Menu, X } from "lucide-react"

const navItems = [
  { label: "WORK", href: "#work", id: "work" },
  { label: "ABOUT", href: "#about", id: "about" },
  { label: "CONTACT", href: "#contact", id: "contact" },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      if (scrollY + viewportHeight >= document.documentElement.scrollHeight - 140) return setActiveSection("contact")
      if (scrollY < 250) return setActiveSection("top")

      for (const id of ["contact", "about", "work"]) {
        const section = document.getElementById(id)
        const midpoint = scrollY + viewportHeight * 0.4
        if (section && midpoint >= section.offsetTop && midpoint < section.offsetTop + section.offsetHeight) {
          setActiveSection(id)
          return
        }
      }
    }

    const closeMenu = () => setIsMenuOpen(false)
    const handleKeyDown = (event: KeyboardEvent) => event.key === "Escape" && closeMenu()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", closeMenu)
    window.addEventListener("keydown", handleKeyDown)
    handleScroll()
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", closeMenu)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const renderNavLink = (item: (typeof navItems)[number], mobile = false) => {
    const isActive = activeSection === item.id
    return (
      <a key={item.id} href={item.href} onClick={() => setIsMenuOpen(false)} className={mobile ? `rounded-xl px-4 py-3 text-sm font-semibold tracking-widest transition-colors ${isActive ? "bg-coral/15 text-coral" : "text-muted hover:bg-white/[0.05] hover:text-foreground"}` : "relative rounded-full px-3 py-1.5 text-muted transition-colors hover:text-foreground"}>
        {!mobile && isActive && <motion.span layoutId="activeNavHighlight" className="absolute inset-0 -z-10 rounded-full border border-coral/40 bg-coral/20 shadow-[0_0_18px_rgba(255,74,34,0.4)]" />}
        <span className={isActive ? "text-coral" : ""}>{item.label}</span>
      </a>
    )
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-[100] px-4 py-3.5 sm:px-12 sm:py-5">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-3 sm:px-8 frosted-glass-nav">
        <motion.a href="#top" initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }} className="font-display text-base font-black tracking-tight text-foreground transition-colors hover:text-coral sm:text-lg">
          AKSHDEEP SINGH
        </motion.a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1.5 text-xs font-medium tracking-widest uppercase md:flex sm:gap-4 sm:text-sm">
          {navItems.map((item) => renderNavLink(item))}
          <a href="/Akshdeep_Singh_Resume.pdf" target="_blank" rel="noopener noreferrer" download="Akshdeep_Singh_Resume.pdf" className="ml-2 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold tracking-wider text-muted transition-colors hover:border-coral/60 hover:bg-coral/15 hover:text-coral">
            <Download size={13} /> <span>RESUME</span>
          </a>
        </nav>

        <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-foreground transition-colors hover:border-coral/60 hover:text-coral md:hidden" aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMenuOpen((open) => !open)}>
          {isMenuOpen ? <X size={20} /> : <Menu size={21} />}
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav id="mobile-navigation" aria-label="Mobile navigation" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.16 }} className="absolute top-[calc(100%+0.6rem)] right-0 left-0 grid gap-1 rounded-2xl p-2 frosted-glass-nav md:hidden">
              {navItems.map((item) => renderNavLink(item, true))}
              <a href="/Akshdeep_Singh_Resume.pdf" target="_blank" rel="noopener noreferrer" download="Akshdeep_Singh_Resume.pdf" onClick={() => setIsMenuOpen(false)} className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-coral px-4 py-3 text-sm font-bold tracking-widest text-black">
                <Download size={16} /> RESUME
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
