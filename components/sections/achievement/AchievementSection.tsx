"use client"

import { motion } from "framer-motion"
import { ExternalLink, Award } from "lucide-react"

export default function AchievementSection() {
  return (
    <section className="relative px-6 py-20 sm:py-24 sm:px-12 lg:px-24 max-w-7xl mx-auto z-10">
      <motion.div 
        initial={{ opacity: 0, y: 45, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="liquid-glass-card rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden group hover:border-yellow/50 hover:shadow-[0_20px_70px_rgba(245,166,35,0.2)] transition-all duration-500"
      >
        {/* Ambient Backlight Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow/20 blur-[110px] rounded-full pointer-events-none group-hover:bg-yellow/30 transition-colors duration-700" />
        
        <div className="flex items-center gap-2.5 text-yellow mb-4">
          <div className="p-2 rounded-full liquid-glass-subtle text-yellow shadow-[0_0_15px_rgba(245,166,35,0.3)]">
            <Award size={20} className="icon-glow-smooth" />
          </div>
          <p className="uppercase tracking-widest text-xs sm:text-sm font-bold">Proof of Work</p>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6">
          BEST PROJECT AWARD
        </h2>

        <p className="text-muted text-base sm:text-lg max-w-2xl mb-8 leading-relaxed font-normal">
          Secured 1st place across three evaluation rounds at the SRM Insider Community for &ldquo;The Last CEO&rdquo;. Built an AI-driven business simulator with XGBoost forecasting, SHAP explainability, and a Groq/Llama 3.1-powered AI advisor.
        </p>

        <a
          href="https://lnkd.in/p/g5efYB-m"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full liquid-glass-pill text-foreground font-semibold hover:text-yellow hover:border-yellow/60 hover:bg-yellow/10 hover:shadow-[0_0_25px_rgba(245,166,35,0.35)] transition-all duration-300 group/link"
        >
          <span>View on LinkedIn</span>
          <ExternalLink size={16} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 icon-glow-smooth" />
        </a>
      </motion.div>
    </section>
  )
}
