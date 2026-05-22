import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { aboutPoints } from '../data/content'

export default function About() {
  return (
    <section id="about" className="section-padding border-t border-white/5">
      <div className="section-container">
        <SectionHeading eyebrow="About Project" title="SEO content at scale — with control" subtitle="FUTURE_PE_03 shows how structured prompts turn generative AI into a reliable blog and cluster production system for local businesses." />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aboutPoints.map((item, i) => (
            <motion.article key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} whileHover={{ y: -4 }} className="glass-card p-6">
              <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-accent-emerald to-accent-sky" />
              <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
