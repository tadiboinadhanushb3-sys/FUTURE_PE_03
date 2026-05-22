import { motion } from 'framer-motion'
import { FolderTree, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import SectionHeading from './SectionHeading'
import { repoTree } from '../data/content'

export default function RepoStructure() {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(repoTree)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <section id="repository" className="section-padding bg-surface-800/40">
      <div className="section-container">
        <SectionHeading eyebrow="Repository Structure" title="FUTURE_PE_03 on GitHub" subtitle="Required public repo layout for Prompt Engineering track verification." />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mt-12 max-w-lg">
          <div className="glass-card overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <span className="flex items-center gap-2 text-sm text-zinc-400"><FolderTree className="h-4 w-4 text-accent-emerald" /> FUTURE_PE_03/</span>
              <button type="button" onClick={copy} className="flex items-center gap-1 text-xs text-zinc-400 hover:text-white">
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-sm text-emerald-300/90">{repoTree}</pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
