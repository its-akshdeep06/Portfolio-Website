"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Instagram, Mail } from "lucide-react"

const portrait = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260325-WA0017-mOlEkWvR9JMI07TVJGau4pq3tGqTk6.jpg"

const socialLinks = [
  { icon: Github, href: "https://github.com/its-akshdeep06", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/its-akshdeep06", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Mail, href: "mailto:akshdeepsingh2kk@gmail.com", label: "Email" },
]

// Staggered load animation variants with rich spring physics
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
}

const itemFadeUpVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  // Hero Scroll Progress for multi-axis cinematic kinematics
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  // Portrait only zooms and fades as the hero leaves the viewport.
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.3])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 0.7, 0])

  // 2. AKSHDEEP: multi-axis parallax — moves left & up as image zooms
  const akshdeepX = useTransform(scrollYProgress, [0, 0.85], [0, -160])
  const akshdeepY = useTransform(scrollYProgress, [0, 0.85], [0, -35])
  const akshdeepOpacity = useTransform(scrollYProgress, [0, 0.65, 0.9], [1, 0.7, 0])

  // 3. SINGH: multi-axis parallax — moves right & down as image zooms
  const singhX = useTransform(scrollYProgress, [0, 0.85], [0, 160])
  const singhY = useTransform(scrollYProgress, [0, 0.85], [0, 35])
  const singhOpacity = useTransform(scrollYProgress, [0, 0.65, 0.9], [1, 0.7, 0])

  // 4. Role tag parallax
  const tagY = useTransform(scrollYProgress, [0, 0.5], [0, -30])
  const tagOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0])

  // 5. Sub-content (bio, CTA, socials): gentle drift & progressive fade-out
  const subContentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0])
  const subContentY = useTransform(scrollYProgress, [0, 0.45], [0, -35])

  return (
    <section ref={heroRef} className="relative min-h-[100svh] md:h-screen z-10" id="top">
      <div className="relative min-h-[100svh] w-full flex flex-col justify-between pt-24 pb-10 sm:pt-28 sm:pb-10 px-6 sm:px-12 lg:px-20 xl:px-28 md:sticky md:top-0 md:h-screen">

        {/* Main Hero Split Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 items-center my-auto"
        >
          {/* Left Column: Hero Typography & Info */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">

            {/* Tag with gentle glow & scroll parallax */}
            <motion.div
              variants={itemFadeUpVariants}
              style={{ y: tagY, opacity: tagOpacity }}
              className="mb-4 sm:mb-6"
            >
              <span className="inline-block px-3.5 py-1 rounded-full liquid-glass-subtle text-coral text-xs sm:text-sm uppercase tracking-[0.28em] font-semibold border-coral/30 shadow-[0_0_15px_rgba(255,74,34,0.15)]">
                Full Stack Developer
              </span>
            </motion.div>

            {/* Main Display Title with Multi-Axis Scroll Kinematics */}
            <div className="flex flex-col select-none mb-6">
              <motion.div
                variants={itemFadeUpVariants}
                style={{ x: akshdeepX, y: akshdeepY, opacity: akshdeepOpacity }}
              >
                <h1 className="font-display text-[clamp(2.75rem,7vw,6.25rem)] font-black tracking-tighter leading-[0.9] italic text-foreground drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
                  AKSHDEEP
                </h1>
              </motion.div>

              <motion.div
                variants={itemFadeUpVariants}
                style={{ x: singhX, y: singhY, opacity: singhOpacity }}
              >
                <span className="flex font-display text-[clamp(2.75rem,7vw,6.25rem)] font-black tracking-tighter leading-[0.9] italic text-transparent bg-clip-text bg-gradient-to-r from-[#ff4a22] via-[#ff8f3d] via-[#f1f5f9] to-[#60a5fa] drop-shadow-[0_10px_40px_rgba(255,74,34,0.45)]">
                  SINGH
                </span>
              </motion.div>
            </div>

            {/* Sub-content wrapper for scroll parallax & fade */}
            <motion.div style={{ opacity: subContentOpacity, y: subContentY }}>
              {/* Bio */}
              <motion.p
                variants={itemFadeUpVariants}
                className="text-muted text-sm sm:text-base md:text-lg leading-relaxed max-w-md mb-8 sm:mb-10 font-normal"
              >
                I build responsive, accessible and user-friendly web experiences that make an impact.
              </motion.p>

              {/* CTA & Explore Button */}
              <motion.div variants={itemFadeUpVariants} className="flex items-center gap-4 mb-10 sm:mb-12">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-4 text-xs sm:text-sm uppercase font-semibold tracking-widest text-foreground hover:text-coral transition-colors"
                >
                  <span className="border-b border-muted/40 group-hover:border-coral pb-1 transition-colors">
                    Explore My Work
                  </span>
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-coral/60 flex items-center justify-center liquid-glass group-hover:bg-coral group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(255,74,34,0.3)] group-hover:shadow-[0_0_35px_rgba(255,74,34,0.7)]">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-coral group-hover:text-black transition-colors" />
                  </div>
                </a>
              </motion.div>

              {/* Social Links Row with Glowing Icons */}
              <motion.div variants={itemFadeUpVariants} className="flex items-center gap-4 sm:gap-5">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-3 rounded-full liquid-glass-subtle text-muted/80 hover:text-foreground hover:border-coral/50 hover:bg-white/[0.08] hover:shadow-[0_0_20px_rgba(255,74,34,0.4)] icon-glow-smooth"
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Static portrait card */}
          <div
            className="lg:col-span-6 flex justify-center lg:justify-end lg:-translate-x-6 items-center relative perspective-[1000px]"
          >
            <motion.div
              style={{ scale: imageScale, opacity: imageOpacity }}
              whileHover={{ boxShadow: "0 0 70px rgba(255,74,34,0.55), 0 0 95px rgba(74,144,226,0.4)" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="group relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[450px] aspect-[3.4/4.4] rounded-[30px] sm:rounded-[36px] p-[2px] overflow-hidden bg-gradient-to-br from-coral via-white/20 to-blue"
            >
              {/* Image frame */}
              <div className="relative w-full h-full">
                <div className="relative w-full h-full rounded-[28px] sm:rounded-[34px] overflow-hidden bg-paper">
                  <img
                    src={portrait}
                    alt="Akshdeep Singh"
                    className="w-full h-full object-cover object-top brightness-[1.02] contrast-[1.02] transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Ambient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent pointer-events-none opacity-90" />

                  {/* Inner Highlight */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[28px] sm:rounded-[34px] pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
