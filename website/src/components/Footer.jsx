import { Github, Linkedin, Mail } from 'lucide-react'
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from '../data/content'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10">
      <div className="section-container section-padding !py-14">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="font-display text-xl font-bold text-white">AI SEO Blog & Content Cluster Generator</p>
            <p className="mt-2 text-sm text-zinc-500">Built with Prompt Engineering · FUTURE_PE_03</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary py-2.5"><Github className="h-4 w-4" /> GitHub</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary py-2.5"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <a href={`mailto:${EMAIL}`} className="btn-secondary py-2.5"><Mail className="h-4 w-4" /> Email</a>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-zinc-600">© {new Date().getFullYear()} FUTURE_PE_03 · Replace placeholder links before submission</p>
      </div>
    </footer>
  )
}
