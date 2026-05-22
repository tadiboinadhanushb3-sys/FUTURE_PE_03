import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { workflowSteps } from '../data/content'

export default function Workflow() {
  return (
    <section id="workflow" className="section-padding">
      <div className="section-container">
        <SectionHeading eyebrow="SEO Workflow" title="Seven stages to a final blog pack" subtitle="From keyword research to publish-ready content with internal links." />
        <div className="mt-14 flex flex-col gap-4 lg:gap-0">
          {workflowSteps.map((item, i) => (
            <motion.div key={item.step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-4 lg:items-center">
              <div className="flex flex-col items-center">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-accent-emerald bg-surface-900 font-display text-xs font-bold text-accent-emerald">{item.step}</span>
                {i < workflowSteps.length - 1 && <div className="hidden h-full min-h-[2rem] w-px bg-gradient-to-b from-accent-emerald/50 to-transparent lg:block" />}
              </div>
              <div className="glass-card mb-2 flex-1 p-5 lg:mb-4">
                <h3 className="font-display font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-zinc-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
