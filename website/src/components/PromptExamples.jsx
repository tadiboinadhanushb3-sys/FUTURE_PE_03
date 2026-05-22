import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { promptExamples } from '../data/content'

export default function PromptExamples() {
  const [active, setActive] = useState(0)
  return (
    <section id="prompts" className="section-padding">
      <div className="section-container">
        <SectionHeading eyebrow="Example SEO Prompts" title="Four core prompt types" subtitle="Blog, keywords, local SEO, and content clusters — realistic FUTURE_PE_03 templates." />
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {promptExamples.map((p, i) => (
            <button key={p.title} type="button" onClick={() => setActive(i)} className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${active === i ? 'bg-gradient-to-r from-accent-emerald to-accent-teal text-white' : 'border border-white/10 bg-white/5 text-zinc-400 hover:text-white'}`}>
              {p.title}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="mx-auto mt-8 max-w-3xl">
            <div className="glass-card overflow-hidden">
              <div className="border-b border-white/10 px-4 py-2 text-xs text-zinc-500">{promptExamples[active].title}.prompt</div>
              <pre className="max-h-96 overflow-auto p-5 font-mono text-sm leading-relaxed text-zinc-300 whitespace-pre-wrap">{promptExamples[active].code}</pre>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
