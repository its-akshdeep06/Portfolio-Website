"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Github, Linkedin, ArrowUpRight, ExternalLink } from "lucide-react"
import ThreeBackground from "@/components/ThreeBackground"

const portrait = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260325-WA0017-mOlEkWvR9JMI07TVJGau4pq3tGqTk6.jpg"

const projects = [
  {
    number: "001",
    tag: "AI / SIMULATOR",
    title: "THE LAST CEO",
    description: "AI-powered business strategy simulator. Led branding, QA, and frontend for a 5-member team. Features live XGBoost predictions, SHAP explainability, and a Groq/Llama 3.1-powered AI advisor.",
    year: "2025",
    tone: "coral",
    github: "https://github.com/its-akshdeep06/The-Last-CEO",
    live: "https://the-last-ceo-eight.vercel.app/",
    image: "/Last_CEO.png",
  },
  {
    number: "002",
    tag: "PRODUCTIVITY / UI",
    title: "KANBAN BOARD",
    description: "Drag-and-drop task management tool built with Next.js and TypeScript. Zero-backend architecture using localStorage. Powered by @dnd-kit for smooth, accessible card movement.",
    year: "2025",
    tone: "blue",
    github: "https://github.com/its-akshdeep06/Kanban",
    live: "https://kanban-aksh.vercel.app/",
    image: "/Kanban.png",
  },
  {
    number: "003",
    tag: "EDTECH / 3D",
    title: "CHRONOKIDS",
    description: "Interactive AI-powered history app for kids. Players converse with real historical figures via Anthropic API, explore eras in a Three.js/React Three Fiber world viewport, and earn achievements.",
    year: "2025",
    tone: "yellow",
    github: "https://github.com/its-akshdeep06/Chronokids",
    live: "https://chronokids-snowy.vercel.app/",
    image: "/ChronoKids.png",
  },
]

const skills = [
  "C/C++", "Java", "Python", "JavaScript", "TypeScript", 
  "HTML/CSS", "React.js", "Node.js", "Next.js", "XGBoost", 
  "Git/GitHub", "Vercel", "Supabase", "RESTful APIs", "DSA"
]

export default function Home() {
  const { scrollYProgress } = useScroll()

  // Hero scroll: tied to the hero section element
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  // Portrait starts at normal scale (1.0) and enlarges on scroll
  const heroImageScale = useTransform(heroScroll, [0, 1], [1, 2.5])
  const heroImageOpacity = useTransform(heroScroll, [0, 0.6, 1], [1, 0.4, 0])

  // "AKSHDEEP" slides left, "SINGH" slides right on scroll
  const heroLeftX = useTransform(heroScroll, [0, 1], ["0%", "-35%"])
  const heroRightX = useTransform(heroScroll, [0, 1], ["0%", "35%"])
  const heroTextOpacity = useTransform(heroScroll, [0, 0.85, 1], [1, 1, 0])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  }

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

      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 mix-blend-difference">
        <a className="font-display font-extrabold text-xl tracking-tighter" href="#top">AKSHDEEP SINGH</a>
        <div className="flex gap-6 text-sm tracking-widest text-muted">
          <a href="#work" className="hover:text-coral transition-colors">WORK</a>
          <a href="#about" className="hover:text-coral transition-colors">ABOUT</a>
          <a href="#contact" className="hover:text-coral transition-colors">CONTACT</a>
        </div>
      </nav>

      {/* ─── HERO: Cinematic scroll ─── */}
      <section ref={heroRef} className="relative h-[200vh] z-10" id="top">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
          
          {/* Main Stage: Normal image in the middle with text behind it */}
          <div className="relative flex items-center justify-center w-full max-w-5xl">
            
            {/* Typography BEHIND the Image: Slides left and right on scroll */}
            <div className="absolute inset-0 z-0 flex flex-col items-center justify-center pointer-events-none select-none">
              <motion.div
                style={{ x: heroLeftX, opacity: heroTextOpacity }}
                className="w-full flex justify-center text-center"
              >
                <h1 className="font-display text-[clamp(2.75rem,8.5vw,7.5rem)] font-extrabold tracking-tighter leading-[0.88] text-foreground drop-shadow-[0_8px_24px_rgba(0,0,0,0.9)]">
                  AKSHDEEP
                </h1>
              </motion.div>
              <motion.div
                style={{ x: heroRightX, opacity: heroTextOpacity }}
                className="w-full flex justify-center text-center"
              >
                <span className="font-display text-[clamp(2.75rem,8.5vw,7.5rem)] font-extrabold tracking-tighter leading-[0.88] text-transparent bg-clip-text bg-gradient-to-r from-coral via-yellow to-blue italic pr-3 drop-shadow-[0_8px_24px_rgba(0,0,0,0.9)]">
                  SINGH
                </span>
              </motion.div>
            </div>

            {/* Image Wrapper for positioning elements around it */}
            <div className="relative z-10 flex items-center justify-center">
              
              {/* "Full-Stack Developer" on the left side of the image */}
              <motion.div 
                style={{ opacity: heroTextOpacity }}
                className="absolute right-full mr-4 md:mr-10 top-1/2 -translate-y-1/2 -rotate-90 origin-center hidden sm:flex items-center justify-center pointer-events-none"
              >
                <span className="text-coral text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold whitespace-nowrap">
                  Full-Stack Developer
                </span>
              </motion.div>

              {/* Centered Normal-Sized Image (Zooms out on scroll) */}
              <motion.div
                style={{ scale: heroImageScale, opacity: heroImageOpacity }}
                className="w-[240px] sm:w-[280px] md:w-[330px] aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.8)] border border-line/60 bg-line/20"
              >
                <img
                  src={portrait}
                  alt="Akshdeep Singh"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </div>
            
          </div>

        </div>
      </section>

      {/* Marquee */}
      <div className="relative flex overflow-x-hidden border-y border-line py-4 bg-background z-10">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex whitespace-nowrap text-muted font-display tracking-widest text-sm"
        >
          {Array(10).fill("DESIGN & DEVELOP — SCALABLE APIs — BUILD TIRELESSLY — ").map((text, i) => (
            <span key={i} className="mx-4">{text}</span>
          ))}
        </motion.div>
      </div>

      <section className="relative px-6 py-32 sm:px-12 lg:px-24 max-w-7xl mx-auto z-10" id="work">
        <div className="mb-20">
          <p className="text-coral uppercase tracking-widest text-sm mb-4">Selected Work</p>
          <h2 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter leading-none">PROJECTS</h2>
        </div>
        
        <div className="flex flex-col gap-0 divide-y divide-line">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="group relative grid grid-cols-1 md:grid-cols-5 gap-0 py-10 md:py-14 items-center cursor-pointer"
            >
              {/* Left: meta */}
              <div className="col-span-1 flex flex-row md:flex-col gap-4 md:gap-2 mb-4 md:mb-0">
                <span className="text-muted text-xs tracking-widest font-mono">{project.number}</span>
                <span className={`text-xs tracking-widest font-semibold uppercase text-${project.tone}`}>{project.tag}</span>
              </div>

              {/* Center: title + desc */}
              <div className="col-span-2 flex flex-col gap-3">
                <h3 className={`font-display text-3xl md:text-5xl font-bold tracking-tight transition-colors duration-300 group-hover:text-${project.tone}`}>
                  {project.title}
                </h3>
                <p className="text-muted text-sm md:text-base leading-relaxed max-w-lg">{project.description}</p>
                <div className="flex gap-4 mt-2 relative z-10">
                  <a href={project.live} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase border-b border-current pb-0.5 hover:opacity-70 transition-opacity"
                    onClick={(e) => e.stopPropagation()}>
                    Live <ExternalLink size={12} />
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-muted border-b border-muted pb-0.5 hover:text-foreground hover:border-foreground transition-colors"
                    onClick={(e) => e.stopPropagation()}>
                    GitHub <Github size={12} />
                  </a>
                </div>
              </div>

              {/* Right: screenshot on hover */}
              <div className="col-span-2 flex justify-end items-center gap-6">
                <div className="relative w-full md:w-72 h-40 md:h-44 rounded-xl overflow-hidden border border-line opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 shadow-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
                <div className={`shrink-0 w-12 h-12 rounded-full bg-${project.tone}/20 border border-${project.tone}/30 flex items-center justify-center group-hover:bg-${project.tone} group-hover:scale-110 transition-all duration-300`}>
                  <ArrowUpRight className={`text-${project.tone} group-hover:text-background w-5 h-5 transition-colors duration-300`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative px-6 py-32 sm:px-12 lg:px-24 bg-line/5 z-10" id="about">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-coral uppercase tracking-widest text-sm mb-4">Academic & Technical</p>
            <h2 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-8">THE FOUNDATION</h2>
            <div className="space-y-6 text-muted text-lg leading-relaxed">
              <p>Bachelor of Technology in Computer Science and Engineering at SRMIST, Kattankulathur (Aug 2025 – May 2029).</p>
              <p>Relevant Coursework: Data Structures & Algorithms (DSA), OOP (C++/Python), Artificial Intelligence, Web Development.</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
             <h3 className="font-display text-2xl font-bold mb-6">TECHNICAL SKILLS</h3>
             <div className="flex flex-wrap gap-3">
               {skills.map((skill, i) => (
                 <span key={i} className="px-4 py-2 border border-line rounded-full text-sm hover:border-coral hover:text-coral transition-colors cursor-default">
                   {skill}
                 </span>
               ))}
             </div>
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 py-32 sm:px-12 lg:px-24 max-w-7xl mx-auto z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-line rounded-3xl p-8 md:p-16 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-yellow/30 transition-colors" />
          <p className="text-yellow uppercase tracking-widest text-sm mb-4">Proof of Work</p>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter leading-none mb-6">BEST PROJECT AWARD</h2>
          <p className="text-muted text-lg max-w-2xl mb-8">
            Secured 1st place across three evaluation rounds at the SRM Insider Community for &ldquo;The Last CEO&rdquo;. Built an AI-driven business simulator with XGBoost forecasting, SHAP explainability, and a Groq/Llama 3.1-powered AI advisor.
          </p>
          <a href="https://lnkd.in/p/g5efYB-m" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-foreground font-semibold hover:text-yellow transition-colors pb-1 border-b border-yellow/30 hover:border-yellow">
            View on LinkedIn <ExternalLink size={16} />
          </a>
        </motion.div>
      </section>

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
    </main>
  )
}
