"use client"

import { motion } from "framer-motion"

export default function MarqueeSection() {
  return (
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
  )
}
