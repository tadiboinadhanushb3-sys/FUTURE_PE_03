import { motion } from 'framer-motion'
import { ArrowRight, Github, FileSearch, BookOpen } from 'lucide-react'
import { GITHUB_URL, stats } from '../data/content'
import AnimatedCounter from './AnimatedCounter'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-hero-glow pt-28 pb-20">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[28rem] w-[28rem] rounded-full bg-accent-emerald/15 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-80 w-80 rounded-full bg-accent-sky/10 blur-[100px]" />

      <div className="section-container relative px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto max-w-4xl text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-300">
            Prompt Engineering · PE · FUTURE_PE_03
          </span>
          <h1 className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            AI SEO Blog &{' '}
            <span className="gradient-text">Content Cluster Generator</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl">
            Prompt-engineered AI workflows for generating SEO blogs, keyword clusters, internal linking strategies, and ranking-focused business content.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
              <Github className="h-4 w-4" /> View GitHub
            </a>
            <a href="#prompts" className="btn-secondary w-full sm:w-auto">
              <FileSearch className="h-4 w-4" /> Explore SEO Prompts
            </a>
            <a href="#blogs" className="btn-secondary w-full sm:w-auto">
              <BookOpen className="h-4 w-4" /> View Blog Outputs <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="font-display text-2xl font-bold text-white sm:text-3xl"><AnimatedCounter value={s.value} suffix={s.suffix} /></p>
              <p className="mt-1 text-xs text-zinc-500">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
