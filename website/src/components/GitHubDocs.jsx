import { motion } from 'framer-motion'
import { Github, ExternalLink, FileCheck } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { githubDocs, GITHUB_URL } from '../data/content'

export default function GitHubDocs() {
  return (
    <section id="documentation" className="section-padding bg-surface-800/40">
      <div className="section-container">
        <SectionHeading eyebrow="GitHub Documentation" title="Evaluation-ready repository" subtitle="Public repo with prompts, SEO outputs, and workflow proof." />
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-8">
            <div className="flex items-center gap-3">
              <Github className="h-10 w-10 text-white" />
              <div>
                <h3 className="font-display text-xl font-bold text-white">FUTURE_PE_03</h3>
                <p className="text-sm text-zinc-500">Track PE · Prompt Engineering</p>
              </div>
            </div>
            <ul className="mt-8 space-y-3">
              {githubDocs.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-zinc-300"><FileCheck className="h-4 w-4 shrink-0 text-accent-emerald" />{item}</li>
              ))}
            </ul>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
              Open Repository <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-8">
            <h4 className="font-display text-lg font-semibold text-white">Submission checklist</h4>
            {[
              ['Repository name', 'FUTURE_PE_03'],
              ['Track code', 'PE'],
              ['Visibility', 'Public'],
              ['Domain', 'Prompt Engineering'],
            ].map(([k, v]) => (
              <div key={k} className="mt-4 flex justify-between border-b border-white/5 pb-3">
                <span className="text-sm text-zinc-500">{k}</span>
                <span className="font-mono text-sm text-accent-emerald">{v}</span>
              </div>
            ))}
            <p className="mt-6 text-xs text-zinc-500">Add AI + Ahrefs/Surfer screenshots to <code className="text-accent-teal">screenshots/</code> and link deployed site in README.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
