import { motion } from 'framer-motion'
import { ListTree, FileText, Network, Link2, MapPin, Target } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { features } from '../data/content'

const icons = { ListTree, FileText, Network, Link2, MapPin, Target }

export default function Features() {
  return (
    <section id="features" className="section-padding bg-surface-800/40">
      <div className="section-container">
        <SectionHeading eyebrow="Features" title="Full SEO content pipeline" subtitle="Six prompt-powered modules for blogs that rank and convert." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = icons[f.icon]
            return (
              <motion.div key={f.title} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} whileHover={{ scale: 1.02 }} className="glass-card p-6">
                <div className="mb-4 inline-flex rounded-xl bg-accent-emerald/15 p-3"><Icon className="h-6 w-6 text-accent-emerald" /></div>
                <h3 className="font-display text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{f.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
