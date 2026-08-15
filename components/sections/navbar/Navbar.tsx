"use client"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 mix-blend-difference">
      <a className="font-display font-extrabold text-xl tracking-tighter" href="#top">AKSHDEEP SINGH</a>
      <div className="flex gap-6 text-sm tracking-widest text-muted">
        <a href="#work" className="hover:text-coral transition-colors">WORK</a>
        <a href="#about" className="hover:text-coral transition-colors">ABOUT</a>
        <a href="#contact" className="hover:text-coral transition-colors">CONTACT</a>
      </div>
    </nav>
  )
}
