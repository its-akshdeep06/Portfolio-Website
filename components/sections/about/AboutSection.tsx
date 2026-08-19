"use client"

import { motion } from "framer-motion"
import { GraduationCap, Code2 } from "lucide-react"

const skills = [
  "C/C++", "Java", "Python", "JavaScript", "TypeScript", 
  "HTML/CSS", "React.js", "Node.js", "Next.js", "XGBoost", 
  "Git/GitHub", "Vercel", "Supabase", "RESTful APIs", "DSA"
]

export default function AboutSection() {
  return (
    <section className="relative px-6 py-20 sm:py-24 sm:px-12 lg:px-24 max-w-7xl mx-auto z-10" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        
        {/* Left Column: Academic & Foundation Liquid Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 p-8 sm:p-10 lg:p-12 rounded-3xl liquid-glass-card flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 text-coral mb-4">
              <GraduationCap size={18} className="icon-glow-smooth" />
              <p className="uppercase tracking-widest text-xs sm:text-sm font-semibold">Academic & Technical</p>
            </div>
            
            <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tighter leading-none mb-6">
              THE FOUNDATION
            </h2>
            
            <div className="space-y-4 text-muted text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Bachelor of Technology in Computer Science and Engineering at <span className="text-foreground font-semibold">SRMIST, Kattankulathur</span> (Aug 2025 – May 2029).
              </p>
              <p>
                Core focus areas: Data Structures & Algorithms (DSA), Object-Oriented Programming (C++/Python), Artificial Intelligence, and Modern Full-Stack Web Development.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4 text-xs font-mono text-muted/80">
            <span className="w-2 h-2 rounded-full bg-coral animate-ping" />
            <span>Active Student & Builder at SRMIST</span>
          </div>
        </motion.div>
        
        {/* Right Column: Technical Skills Liquid Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 p-8 sm:p-10 lg:p-12 rounded-3xl liquid-glass-card flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 text-blue mb-4">
              <Code2 size={18} className="icon-glow-smooth" />
              <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight uppercase">
                Technical Skills
              </h3>
            </div>

            <p className="text-muted text-sm sm:text-base mb-6 font-normal">
              Technologies and tools I use to architect robust, performant software:
            </p>

            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {skills.map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.025, ease: [0.16, 1, 0.3, 1] }}
                  className="px-4 py-2 rounded-full text-xs sm:text-sm liquid-glass-pill hover:border-coral/60 hover:text-coral hover:bg-coral/[0.1] hover:shadow-[0_0_20px_rgba(255,74,34,0.3)] hover:-translate-y-0.5 transition-all duration-300 select-none cursor-default font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-muted/70">
            <span>Always exploring & learning</span>
            <span className="text-coral">15+ CORE SKILLS</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
