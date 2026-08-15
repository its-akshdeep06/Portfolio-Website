"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const portrait = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260325-WA0017-mOlEkWvR9JMI07TVJGau4pq3tGqTk6.jpg"

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  // 1. Portrait image: enlarges on scroll and fades
  const heroImageScale = useTransform(heroScroll, [0, 1], [1, 2.4])
  const heroImageOpacity = useTransform(heroScroll, [0, 0.65, 1], [1, 0.4, 0])

  // 2. AKSHDEEP: upper image overlap, moves left and up on scroll
  const akshdeepX = useTransform(heroScroll, [0, 1], ["0%", "-35%"])
  const akshdeepY = useTransform(heroScroll, [0, 1], ["0px", "-50px"])
  const akshdeepOpacity = useTransform(heroScroll, [0, 0.85, 1], [1, 1, 0])

  // 3. SINGH: lower image overlap, moves right and down on scroll
  const singhX = useTransform(heroScroll, [0, 1], ["0%", "35%"])
  const singhY = useTransform(heroScroll, [0, 1], ["0px", "50px"])
  const singhOpacity = useTransform(heroScroll, [0, 0.85, 1], [1, 1, 0])

  // 4. FRONT END: left side label, moves outward to the left
  const frontEndX = useTransform(heroScroll, [0, 1], ["0px", "-100px"])
  const frontEndOpacity = useTransform(heroScroll, [0, 0.7, 1], [1, 0.5, 0])

  // 5. DEVELOPER: right side label, moves outward to the right
  const developerX = useTransform(heroScroll, [0, 1], ["0px", "100px"])
  const developerOpacity = useTransform(heroScroll, [0, 0.7, 1], [1, 0.5, 0])

  return (
    <section ref={heroRef} className="relative h-[200vh] z-10" id="top">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        
        {/* Main Stage: Centered on the portrait anchor */}
        <div className="relative flex items-center justify-center">
          
          {/* AKSHDEEP — oversized, horizontal across the upper part of the image */}
          <motion.div
            style={{ x: akshdeepX, y: akshdeepY, opacity: akshdeepOpacity }}
            className="absolute top-[18%] sm:top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-screen flex justify-center text-center pointer-events-none select-none"
          >
            <h1 className="font-display text-[clamp(3.25rem,9.5vw,8.5rem)] font-extrabold tracking-tighter leading-none text-foreground drop-shadow-[0_12px_40px_rgba(0,0,0,0.95)] translate-x-[-230px] translate-y-[-40px]">
              AKSHDEEP
            </h1>
          </motion.div>

          {/* Centered Portrait Card Anchor */}
          <motion.div
            style={{ scale: heroImageScale, opacity: heroImageOpacity }}
            className="relative z-10 w-[500px] sm:w-[540px] md:w-[480px] aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.85)] border border-line/60 bg-line/20"
          >
            <img
              src={portrait}
              alt="Akshdeep Singh"
              className="w-full h-full object-cover object-top "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* SINGH — oversized, horizontal across the lower part of the image */}
          <motion.div
            style={{ x: singhX, y: singhY, opacity: singhOpacity }}
            className="absolute bottom-[18%] sm:bottom-[20%] left-1/2 -translate-x-1/2 translate-y-1/2 z-20 w-screen flex justify-center text-center pointer-events-none select-none"
          >
            <span className="font-display text-[clamp(3.25rem,9.5vw,8.5rem)] font-extrabold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-coral via-yellow to-blue italic pr-3 drop-shadow-[0_12px_40px_rgba(0,0,0,0.95)] translate-x-70 translate-y-5">
              SINGH
            </span>
          </motion.div>

          {/* FRONT END — vertically centered relative to portrait height, cleanly outside on the left */}
          <motion.div 
            style={{ x: frontEndX, opacity: frontEndOpacity }}
            className="absolute right-full mr-6 sm:mr-10 md:mr-14 top-1/2 -translate-y-1/2 -rotate-90 origin-center hidden sm:flex items-center justify-center pointer-events-none z-10"
          >
            <span className="text-coral text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold whitespace-nowrap">
              Front End
            </span>
          </motion.div>

          {/* DEVELOPER — vertically centered relative to portrait height, cleanly outside on the right */}
          <motion.div 
            style={{ x: developerX, opacity: developerOpacity }}
            className="absolute left-full ml-6 sm:ml-10 md:ml-14 top-1/2 -translate-y-1/2 rotate-90 origin-center hidden sm:flex items-center justify-center pointer-events-none z-10"
          >
            <span className="text-coral text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold whitespace-nowrap">
              Developer
            </span>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
