"use client"

import { motion } from "framer-motion"
import { ExternalLink, Award } from "lucide-react"

const achievements = [
  {
    title: "BEST PROJECT AWARD",
    description: "Secured 1st place across three evaluation rounds at the SRM Insider Community for “The Last CEO”. Built an AI-driven business simulator with XGBoost forecasting, SHAP explainability, and a Groq/Llama 3.1-powered AI advisor.",
    link: "https://lnkd.in/p/g5efYB-m",
    toneClass: "yellow",
    borderColor: "hover:border-yellow/50",
    shadowColor: "hover:shadow-[0_20px_70px_rgba(245,166,35,0.2)]",
    ambientGlow: "bg-yellow/20 group-hover:bg-yellow/30",
    iconText: "text-yellow",
    iconShadow: "shadow-[0_0_15px_rgba(245,166,35,0.3)]",
    btnHover: "hover:text-yellow hover:border-yellow/60 hover:bg-yellow/10 hover:shadow-[0_0_25px_rgba(245,166,35,0.35)]"
  },
  {
    title: "HACKATHON WINNER - RECONNECT",
    description: "Developed RECONNECT, an AI-powered rehabilitation platform bridging the gap between individuals and support organizations. Features dual-role dashboards, personalized tracking, and a 24/7 AI companion.",
    link: "https://lnkd.in/p/gmABB-wn",
    toneClass: "emerald-500",
    borderColor: "hover:border-emerald-500/50",
    shadowColor: "hover:shadow-[0_20px_70px_rgba(16,185,129,0.2)]",
    ambientGlow: "bg-emerald-500/20 group-hover:bg-emerald-500/30",
    iconText: "text-emerald-500",
    iconShadow: "shadow-[0_0_15px_rgba(16,185,129,0.3)]",
    btnHover: "hover:text-emerald-500 hover:border-emerald-500/60 hover:bg-emerald-500/10 hover:shadow-[0_0_25px_rgba(16,185,129,0.35)]"
  }
]

export default function AchievementSection() {
  return (
    <section className="relative px-6 py-20 sm:py-24 sm:px-12 lg:px-24 max-w-7xl mx-auto z-10">
      <div className="flex flex-col gap-8">
        {achievements.map((achievement, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 45, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`liquid-glass-card rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden group ${achievement.borderColor} ${achievement.shadowColor} transition-all duration-500`}
          >
            {/* Ambient Backlight Glow */}
            <div className={`absolute top-0 right-0 w-96 h-96 blur-[110px] rounded-full pointer-events-none transition-colors duration-700 ${achievement.ambientGlow}`} />
            
            <div className={`flex items-center gap-2.5 mb-4 ${achievement.iconText}`}>
              <div className={`p-2 rounded-full liquid-glass-subtle ${achievement.iconText} ${achievement.iconShadow}`}>
                <Award size={20} className="icon-glow-smooth" />
              </div>
              <p className="uppercase tracking-widest text-xs sm:text-sm font-bold">Proof of Work</p>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6">
              {achievement.title}
            </h2>

            <p className="text-muted text-base sm:text-lg max-w-2xl mb-8 leading-relaxed font-normal">
              {achievement.description}
            </p>

            <a
              href={achievement.link}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-full liquid-glass-pill text-foreground font-semibold ${achievement.btnHover} transition-all duration-300 group/link`}
            >
              <span>View on LinkedIn</span>
              <ExternalLink size={16} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 icon-glow-smooth" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
