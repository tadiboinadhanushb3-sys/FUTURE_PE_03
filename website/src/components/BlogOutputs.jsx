import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { blogOutputs } from '../data/content'

const tabs = [
  { id: 'dental', label: 'Dental' },
  { id: 'cafe', label: 'Café' },
  { id: 'fitness', label: 'Fitness' },
  { id: 'salon', label: 'Salon' },
  { id: 'saas', label: 'SaaS' },
]

export default function BlogOutputs() {
  const [active, setActive] = useState('dental')
  const data = blogOutputs[active]

  return (
    <section id="blogs" className="section-padding bg-surface-800/40">
      <div className="section-container">
        <SectionHeading eyebrow="Example Blog Outputs" title="Publish-ready SEO content" subtitle="H-structure, meta tags, internal links, and long-form excerpts by industry." />
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {tabs.map((t) => (
            <button key={t.id} type="button" onClick={() => setActive(t.id)} className={`rounded-full px-4 py-2 text-sm font-medium ${active === t.id ? 'bg-gradient-to-r from-accent-emerald to-accent-teal text-white' : 'border border-white/10 text-zinc-400 hover:text-white'}`}>
              {t.label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} className="mt-10 space-y-5">
            <p className="text-center text-sm text-accent-emerald">{data.business} · {data.industry}</p>
            <div className="glass-card p-6">
              <span className="text-xs uppercase text-zinc-500">H1</span>
              <h3 className="mt-2 font-display text-xl font-semibold text-white">{data.h1}</h3>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              <div className="glass-card p-6">
                <span className="text-xs uppercase text-zinc-500">H2 Structure</span>
                <ul className="mt-3 space-y-2">{data.structure.map((h) => <li key={h} className="text-sm text-zinc-300">{h}</li>)}</ul>
              </div>
              <div className="glass-card p-6">
                <span className="text-xs uppercase text-zinc-500">Meta</span>
                <p className="mt-2 text-sm font-medium text-white">{data.metaTitle}</p>
                <p className="mt-2 text-sm text-zinc-400">{data.metaDesc}</p>
              </div>
            </div>
            <div className="glass-card p-6">
              <span className="text-xs uppercase text-zinc-500">Internal linking</span>
              <ul className="mt-3 space-y-2">{data.internalLinks.map((l) => <li key={l} className="text-sm text-accent-teal">{l}</li>)}</ul>
            </div>
            <div className="glass-card p-6">
              <span className="text-xs uppercase text-zinc-500">Long-form excerpt</span>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">{data.excerpt}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
