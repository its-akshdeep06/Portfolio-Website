"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import ThreeBackground from "@/components/core/ThreeBackground"
import Navbar from "@/components/sections/navbar/Navbar"
import HeroSection from "@/components/sections/hero/HeroSection"
import MarqueeSection from "@/components/sections/marquee/MarqueeSection"
import ProjectsSection from "@/components/sections/projects/ProjectsSection"
import AboutSection from "@/components/sections/about/AboutSection"
import AchievementSection from "@/components/sections/achievement/AchievementSection"
import FooterSection from "@/components/sections/footer/FooterSection"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden selection:bg-coral selection:text-ink bg-background text-foreground font-body">
      {/* Three.js Background */}
      <ThreeBackground />

      {/* Custom Cursor Blob */}
      <motion.div 
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-coral/10 rounded-full blur-[100px] pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />

      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <ProjectsSection setIsHovering={setIsHovering} />
      <AboutSection />
      <AchievementSection />
      <FooterSection />
    </main>
  )
}
