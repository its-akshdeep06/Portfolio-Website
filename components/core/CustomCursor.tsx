"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  // Direct mouse coordinates
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Bouncy spring physics with lively elasticity
  const springConfig = { damping: 18, stiffness: 260, mass: 0.25 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    // Only enable on devices that have a fine pointer (mouse/trackpad)
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseDown = () => setIsClicked(true)
    const handleMouseUp = () => setIsClicked(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    // Detect hover over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (
        target?.closest("a") ||
        target?.closest("button") ||
        target?.closest("input") ||
        target?.closest("textarea") ||
        target?.closest('[role="button"]') ||
        target?.closest(".cursor-pointer") ||
        target?.closest("img") ||
        target?.closest("svg")
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseover", handleMouseOver, { passive: true })
    document.documentElement.addEventListener("mouseleave", handleMouseLeave)
    document.documentElement.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseover", handleMouseOver)
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave)
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [mouseX, mouseY, isVisible])

  if (!isVisible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Concentric Bouncy Cursor Anchor */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="relative flex items-center justify-center w-12 h-12"
      >
        {/* Outer Bouncy Elastic Ring */}
        <motion.div
          animate={{
            scale: isClicked ? 0.65 : isHovered ? 1.85 : 1,
            borderColor: isHovered ? "rgba(255, 74, 34, 0.95)" : "rgba(255, 255, 255, 0.45)",
            backgroundColor: isHovered ? "rgba(255, 74, 34, 0.15)" : "rgba(255, 255, 255, 0.02)",
            boxShadow: isHovered
              ? "0 0 25px rgba(255, 74, 34, 0.5), inset 0 0 10px rgba(255, 74, 34, 0.2)"
              : "0 0 12px rgba(255, 255, 255, 0.15)",
          }}
          transition={{
            type: "spring",
            damping: 14,
            stiffness: 280,
            mass: 0.2,
          }}
          className="absolute inset-0 m-auto w-9 h-9 rounded-full border border-white/40 backdrop-blur-[1px]"
        />

        {/* Concentric Center Precision Dot */}
        <motion.div
          animate={{
            scale: isClicked ? 1.5 : isHovered ? 0.5 : 1,
            backgroundColor: isHovered ? "#ff4a22" : "#ffffff",
            boxShadow: isHovered
              ? "0 0 12px rgba(255, 74, 34, 1)"
              : "0 0 8px rgba(255, 255, 255, 0.95)",
          }}
          transition={{
            type: "spring",
            damping: 16,
            stiffness: 350,
          }}
          className="absolute inset-0 m-auto w-1.5 h-1.5 rounded-full bg-white"
        />
      </motion.div>
    </div>
  )
}
