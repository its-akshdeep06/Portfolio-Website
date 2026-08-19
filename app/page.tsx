"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import ThreeBackground from "@/components/core/ThreeBackground"
import CustomCursor from "@/components/core/CustomCursor"
import Navbar from "@/components/sections/navbar/Navbar"
import HeroSection from "@/components/sections/hero/HeroSection"
import ProjectsSection from "@/components/sections/projects/ProjectsSection"
import AboutSection from "@/components/sections/about/AboutSection"
import AchievementSection from "@/components/sections/achievement/AchievementSection"
import FooterSection from "@/components/sections/footer/FooterSection"

export default function Home() {
  const [isHovering, setIsHovering] = useState(false)
  const mouseX = useMotionValue(-300)
  const mouseY = useMotionValue(-300)

  // Smooth spring for ambient background glow
  const glowX = useSpring(mouseX, { damping: 25, stiffness: 180 })
  const glowY = useSpring(mouseY, { damping: 25, stiffness: 180 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <main className="relative min-h-screen selection:bg-coral selection:text-ink bg-background text-foreground font-body overflow-x-hidden">
      {/* 3D Three.js Geometric Constellation Background */}
      <ThreeBackground />

      {/* Interactive Custom Bouncy Cursor */}
      <CustomCursor />

      {/* Enhanced Ambient Cursor-Following Glow */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.35 : 1,
          opacity: isHovering ? 0.95 : 0.8,
        }}
        transition={{ duration: 0.3 }}
        className="ambient-cursor-glow fixed top-0 left-0 w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle,rgba(255,74,34,0.2)_0%,rgba(74,144,226,0.12)_45%,transparent_70%)] blur-[95px] pointer-events-none z-0"
      />

      <Navbar />
      <HeroSection />
      <ProjectsSection setIsHovering={setIsHovering} />
      <AboutSection />
      <AchievementSection />
      <FooterSection />
    </main>
  )
}
