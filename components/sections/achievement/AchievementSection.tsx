"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

export default function AchievementSection() {
  return (
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
  )
}
