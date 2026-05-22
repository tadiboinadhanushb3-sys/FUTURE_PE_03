import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Search } from 'lucide-react'
import { navLinks, GITHUB_URL } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-white/10 bg-surface-900/85 backdrop-blur-xl' : ''}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 font-display text-lg font-bold text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-emerald to-accent-teal">
            <Search className="h-4 w-4 text-white" />
          </span>
          <span className="hidden sm:inline">FUTURE_PE_03</span>
        </a>
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}><a href={l.href} className="text-sm text-zinc-400 hover:text-white">{l.label}</a></li>
          ))}
        </ul>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary hidden py-2 text-xs lg:inline-flex">
          <Github className="h-4 w-4" /> GitHub
        </a>
        <button type="button" className="rounded-lg border border-white/10 p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="border-t border-white/10 bg-surface-900/95 backdrop-blur-xl lg:hidden">
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((l) => (
                <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm text-zinc-300 hover:bg-white/5">{l.label}</a></li>
              ))}
              <li className="pt-2"><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center">View GitHub</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
