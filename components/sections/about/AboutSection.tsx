"use client"

import { motion } from "framer-motion"

const skills = [
  "C/C++", "Java", "Python", "JavaScript", "TypeScript", 
  "HTML/CSS", "React.js", "Node.js", "Next.js", "XGBoost", 
  "Git/GitHub", "Vercel", "Supabase", "RESTful APIs", "DSA"
]

export default function AboutSection() {
  return (
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
  )
}
