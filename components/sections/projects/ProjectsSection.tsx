"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Github, ArrowUpRight, ExternalLink } from "lucide-react"

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

interface ProjectsSectionProps {
  setIsHovering: (hovering: boolean) => void
}

export default function ProjectsSection({ setIsHovering }: ProjectsSectionProps) {
  return (
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
  )
}
