import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { tools } from '../data/content'

export default function Tools() {
  return (
    <section id="tools" className="section-padding">
      <div className="section-container">
        <SectionHeading eyebrow="Tools & Technologies" title="SEO + AI stack" subtitle="From keyword research to deployment." />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ y: -6 }} className="glass-card p-5 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-emerald/15 font-display text-lg font-bold text-accent-emerald">{t.name[0]}</div>
              <h3 className="font-semibold text-white">{t.name}</h3>
              <p className="mt-2 text-xs text-zinc-500">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
