"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    number: "001",
    tag: "AI / SIMULATOR",
    title: "THE LAST CEO",
    description: "AI-powered business strategy simulator. Led branding, QA, and frontend for a 5-member team. Features live XGBoost predictions, SHAP explainability, and a Groq/Llama 3.1-powered AI advisor.",
    year: "2025",
    tone: "coral",
    tagColor: "text-coral",
    borderHover: "hover:border-coral/80",
    textHover: "group-hover:text-coral",
    glowColor: "group-hover:shadow-[0_0_60px_rgba(255,74,34,0.6),0_0_20px_rgba(255,74,34,0.4)]",
    cardGlow: "hover:shadow-[0_20px_60px_rgba(255,74,34,0.18)] hover:border-coral/40",
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
    tagColor: "text-blue",
    borderHover: "hover:border-blue/80",
    textHover: "group-hover:text-blue",
    glowColor: "group-hover:shadow-[0_0_60px_rgba(74,144,226,0.6),0_0_20px_rgba(74,144,226,0.4)]",
    cardGlow: "hover:shadow-[0_20px_60px_rgba(74,144,226,0.18)] hover:border-blue/40",
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
    tagColor: "text-yellow",
    borderHover: "hover:border-yellow/80",
    textHover: "group-hover:text-yellow",
    glowColor: "group-hover:shadow-[0_0_60px_rgba(245,166,35,0.6),0_0_20px_rgba(245,166,35,0.4)]",
    cardGlow: "hover:shadow-[0_20px_60px_rgba(245,166,35,0.18)] hover:border-yellow/40",
    github: "https://github.com/its-akshdeep06/Chronokids",
    live: "https://chronokids-snowy.vercel.app/",
    image: "/ChronoKids.png",
  },
]

interface ProjectsSectionProps {
  setIsHovering: (hovering: boolean) => void
}

export default function ProjectsSection({ setIsHovering }: ProjectsSectionProps) {
  return (
    <section className="relative px-6 py-20 sm:py-24 sm:px-12 lg:px-24 max-w-7xl mx-auto z-10" id="work">
      {/* Section Header with Reveal Animation */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14"
      >
        <div className="inline-block px-3.5 py-1 rounded-full liquid-glass-subtle mb-3">
          <p className="text-coral uppercase tracking-widest text-xs sm:text-sm font-semibold">Selected Work</p>
        </div>
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-none">
          PROJECTS
        </h2>
      </motion.div>
      
      {/* Liquid Glass Projects Cards Stack */}
      <div className="flex flex-col gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-10 lg:p-12 rounded-3xl liquid-glass-card ${project.cardGlow} items-center overflow-hidden`}
          >
            {/* Ambient Corner Glow Accent */}
            <div
              className={`absolute top-0 right-0 w-72 h-72 rounded-full blur-[110px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                project.tone === "coral"
                  ? "bg-coral/25"
                  : project.tone === "blue"
                  ? "bg-blue/25"
                  : "bg-yellow/25"
              }`}
            />

            {/* Left Col (3 cols): Meta Number & Tag */}
            <div className="lg:col-span-3 flex flex-row lg:flex-col gap-4 lg:gap-3 items-start">
              <span className="text-muted/70 text-xs tracking-widest font-mono px-3 py-1 rounded-full liquid-glass-subtle">
                {project.number}
              </span>
              <span className={`text-xs tracking-widest font-bold uppercase ${project.tagColor} px-3 py-1 rounded-full liquid-glass-subtle`}>
                {project.tag}
              </span>
            </div>

            {/* Center Col (5 cols): Title, Description, Action Buttons */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group/title inline-block"
              >
                <h3 className={`font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight transition-colors duration-300 ${project.textHover}`}>
                  {project.title}
                </h3>
              </a>
              
              <p className="text-muted text-sm sm:text-base leading-relaxed font-normal">
                {project.description}
              </p>
              
              {/* Liquid Glass Pill Action Links with Glow */}
              <div className="flex items-center gap-4 mt-2 relative z-10">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass-pill text-xs font-semibold tracking-widest uppercase hover:border-coral/60 hover:text-coral hover:bg-coral/10 hover:shadow-[0_0_20px_rgba(255,74,34,0.35)] transition-all duration-300 group/btn"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={13} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 icon-glow-smooth" />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass-subtle text-xs font-semibold tracking-widest uppercase text-muted hover:text-foreground hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all duration-300 group/git"
                >
                  <span>GitHub</span>
                  <Github size={13} className="transition-transform duration-300 group-hover/git:scale-110 icon-glow-smooth" />
                </a>
              </div>
            </div>

            {/* Right Col (4 cols): Clickable Screenshot with Rich Dynamic Glow on Hover */}
            <div className="lg:col-span-4 flex justify-start lg:justify-end items-center">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                title={`Open ${project.title} live demo`}
                className={`group/preview relative block w-full h-48 sm:h-56 rounded-2xl overflow-hidden liquid-glass ${project.borderHover} ${project.glowColor} transition-all duration-500 cursor-pointer shadow-xl`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover/preview:scale-108 group-hover/preview:brightness-105"
                />
                
                {/* Ambient vignette and specular sheen */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/15 to-transparent opacity-70 group-hover/preview:opacity-20 transition-opacity duration-500" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-2xl pointer-events-none" />
                
                {/* Floating Liquid Glass Visit Indicator */}
                <div className="absolute bottom-3.5 right-3.5 px-3.5 py-1.5 rounded-full liquid-glass text-xs font-mono text-muted group-hover/preview:text-foreground group-hover/preview:border-coral/60 group-hover/preview:bg-coral/15 flex items-center gap-2 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
                  <span>Visit Demo</span>
                  <ExternalLink size={11} className="icon-glow-smooth" />
                </div>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
