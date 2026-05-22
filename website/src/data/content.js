export const GITHUB_URL = 'https://github.com/YOUR_USERNAME/FUTURE_PE_03'
export const LINKEDIN_URL = 'https://linkedin.com/in/yourprofile'
export const EMAIL = 'your.email@example.com'

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Repository', href: '#repository' },
  { label: 'Prompts', href: '#prompts' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'Tools', href: '#tools' },
]

export const stats = [
  { value: 15, suffix: '+', label: 'SEO prompt templates' },
  { value: 20, suffix: '+', label: 'Blog outputs' },
  { value: 5, suffix: '', label: 'Industry case studies' },
  { value: 7, suffix: '', label: 'Workflow stages' },
]

export const aboutPoints = [
  { title: 'AI-generated SEO content', desc: 'Long-form blogs, service pages, and FAQs engineered to match search intent — not keyword stuffing.' },
  { title: 'Prompt engineering for ranking blogs', desc: 'Master prompts enforce H-structure, meta limits, semantic keywords, and E-E-A-T signals.' },
  { title: 'Keyword intent mapping', desc: 'Informational, commercial, and local intents mapped before a single paragraph is written.' },
  { title: 'Content cluster generation', desc: 'Pillar pages + supporting articles with shared topics and internal link paths.' },
  { title: 'Local SEO optimization', desc: 'City + neighbourhood pages, Google Business Profile copy, and “near me” query coverage.' },
  { title: 'Business-focused content strategies', desc: 'Content calendars tied to leads — appointments, bookings, demos — not vanity traffic.' },
]

export const features = [
  { icon: 'ListTree', title: 'SEO Blog Outline Generator', desc: 'H1–H3 hierarchy, FAQ blocks, and word-count targets from one keyword brief.' },
  { icon: 'FileText', title: 'Long-form Blog Writer', desc: '1,200–2,500 word articles with natural keyword placement and readable sections.' },
  { icon: 'Network', title: 'Content Cluster Mapping', desc: 'Pillar + cluster visual map with anchor text and publish order.' },
  { icon: 'Link2', title: 'Internal Linking Suggestions', desc: 'Contextual links between service pages, blogs, and location pages.' },
  { icon: 'MapPin', title: 'Local SEO Content', desc: 'Location pages, schema hints, and NAP-consistent copy for local pack rankings.' },
  { icon: 'Target', title: 'Keyword Intent Optimization', desc: 'Aligns titles, meta, and CTAs to informational vs transactional search intent.' },
]

export const workflowSteps = [
  { step: '01', title: 'Keyword Research', desc: 'Primary + secondary keywords, volume, difficulty, and intent from Ahrefs/Surfer briefs.' },
  { step: '02', title: 'Prompt Engineering', desc: 'System rules, outline prompt, body prompt, meta prompt, and validation checklist.' },
  { step: '03', title: 'Blog Structure', desc: 'H1, H2s, FAQ schema, featured snippet targets, and CTA placement map.' },
  { step: '04', title: 'AI Content Generation', desc: 'ChatGPT, Claude, or Gemini run on the same brief for quality comparison.' },
  { step: '05', title: 'SEO Optimization', desc: 'Meta title/description, slug, alt text, keyword density check, readability pass.' },
  { step: '06', title: 'Internal Linking', desc: 'Link to pillar, services, and related cluster posts with descriptive anchors.' },
  { step: '07', title: 'Final Blog Pack', desc: 'Publish-ready MD/HTML, meta tags, link map, and content calendar slot.' },
]

export const repoTree = `FUTURE_PE_03/
├── README.md
├── prompts.md
├── seo-blog-outputs.md
├── content-clusters.md
├── keyword-strategy.md
├── workflow.md
├── case-study.md
└── screenshots/`

export const promptExamples = [
  {
    title: 'Blog generation',
    code: `SYSTEM: SEO content strategist. Write for humans first, Google second.
Output: H1 | Meta title (60 chars) | Meta desc (155 chars) | Outline | Full article

USER:
Business: SmileCare Dental, Vijayawada
Primary KW: "root canal treatment cost in Vijayawada"
Intent: Commercial investigation
Secondary: painless root canal, best dentist Vijayawada
Tone: Trustworthy, plain language
Word count: 1,800`,
  },
  {
    title: 'Keyword mapping',
    code: `TASK: Build keyword cluster for pillar "Digital Marketing Agency Vijayawada"

Group by intent:
- Informational (what is, how to)
- Commercial (best, top, vs, pricing)
- Local (near me, Vijayawada, Benz Circle)

Output table: Keyword | Intent | Suggested URL | H1 idea`,
  },
  {
    title: 'Local SEO page',
    code: `Generate local landing page copy:
Business: Brew Lane Café, MG Road Vijayawada
Target: "best café near me Vijayawada"
Include: NAP block, 3 neighbourhood mentions, 5 FAQs, CTA to WhatsApp
Schema: LocalBusiness FAQ hints`,
  },
  {
    title: 'Content cluster',
    code: `Pillar: "Complete Guide to Gym Membership in Vijayawada"
Create 6 cluster titles with:
- Target keyword
- Search intent
- Internal link TO pillar (anchor text)
- 2-sentence summary`,
  },
]

export const tools = [
  { name: 'ChatGPT', role: 'Fast drafts & outlines' },
  { name: 'Claude', role: 'Long-form nuance & tone' },
  { name: 'Gemini', role: 'Research synthesis' },
  { name: 'GitHub', role: 'FUTURE_PE_03 public repo' },
  { name: 'Surfer SEO', role: 'Content score & terms' },
  { name: 'Ahrefs', role: 'Keywords & clusters' },
  { name: 'Lovable', role: 'Site deployment' },
]

export const githubDocs = [
  'Public repository: FUTURE_PE_03 (PE track requirement)',
  'prompts.md — master system + SEO task prompts',
  'seo-blog-outputs.md — full articles by industry',
  'content-clusters.md — pillar + cluster maps',
  'keyword-strategy.md — intent tables & priorities',
  'workflow.md — 7-stage PE process',
  'case-study.md — ranking narrative & learnings',
  'screenshots/ — AI tool + Surfer/Ahrefs evidence',
]

export const blogOutputs = {
  dental: {
    industry: 'Dental Clinic',
    business: 'SmileCare Dental, Vijayawada',
    h1: 'Root Canal Treatment Cost in Vijayawada (2025 Guide)',
    structure: ['H2: What is a root canal?', 'H2: Average cost in Vijayawada', 'H2: Factors affecting price', 'H2: Painless options at SmileCare', 'H2: FAQs'],
    metaTitle: 'Root Canal Cost Vijayawada | SmileCare Dental',
    metaDesc: 'Transparent root canal pricing in Vijayawada. Painless treatment, experienced dentists, EMI options. Book a consultation at SmileCare Dental today.',
    internalLinks: ['Link to /services/root-canal → "root canal treatment"', 'Link to /location/vijayawada → "dentist in Vijayawada"', 'Link to pillar /dental-care-guide → "complete dental care guide"'],
    excerpt: 'If you\'re searching root canal treatment cost in Vijayawada, you\'re likely dealing with pain and worried about the bill. This guide breaks down typical price ranges (₹3,500–₹8,000 depending on tooth and crown), what\'s included, and how SmileCare keeps the process comfortable with modern anesthesia and clear quotes before treatment starts...',
  },
  cafe: {
    industry: 'Café',
    business: 'Brew Lane Café, Vijayawada',
    h1: 'Best Specialty Coffee in Vijayawada — Brew Lane Café Guide',
    structure: ['H2: Why specialty coffee matters', 'H2: Our beans and brew methods', 'H2: Breakfast menu highlights', 'H2: Visit us on MG Road', 'H2: FAQs'],
    metaTitle: 'Best Café in Vijayawada | Brew Lane MG Road',
    metaDesc: 'Filter coffee, cold brew & Andhra breakfast on MG Road. Quiet workspace, WhatsApp booking. Discover Brew Lane Café — Vijayawada\'s local favorite.',
    internalLinks: ['Link to /menu → "full café menu"', 'Link to /blog/co-working-cafes-vijayawada → "cafés for remote work"', 'Link to pillar /food-guide-vijayawada → "Vijayawada food guide"'],
    excerpt: 'Vijayawada\'s café scene has grown fast — but not every spot nails both coffee quality and consistent service. Brew Lane roasts weekly, lets you customize chai sweetness, and opens early for professionals who need a reliable workspace near Benz Circle...',
  },
  fitness: {
    industry: 'Fitness Center',
    business: 'IronPulse Fitness, Vijayawada',
    h1: 'Gym Membership in Vijayawada: Prices, Plans & What to Look For',
    structure: ['H2: Types of gyms in Vijayawada', 'H2: IronPulse membership plans', 'H2: Strength vs cardio focus', 'H2: Free trial details', 'H2: FAQs'],
    metaTitle: 'Gym in Vijayawada | IronPulse Fitness Plans',
    metaDesc: 'Compare gym membership in Vijayawada. Personal coaching, strength training, free trial class. Join IronPulse Fitness — MG Road area.',
    internalLinks: ['Link to /membership → "membership plans"', 'Link to /blog/strength-training-beginners → "beginner strength guide"', 'Link to pillar /fitness-vijayawada → "fitness in Vijayawada"'],
    excerpt: 'Choosing a gym in Vijayawada isn\'t only about monthly fee — it\'s coaching quality, equipment upkeep, and whether the timetable fits your job. IronPulse focuses on compound strength training with certified trainers, not overcrowded cardio-only floors...',
  },
  salon: {
    industry: 'Salon',
    business: 'Glow Studio Salon, Vijayawada',
    h1: 'Keratin Treatment in Vijayawada — Benefits, Cost & Aftercare',
    structure: ['H2: What keratin treatment does', 'H2: Price range in Vijayawada', 'H2: Who should get it', 'H2: Glow Studio process', 'H2: Aftercare tips', 'H2: Book appointment'],
    metaTitle: 'Keratin Treatment Vijayawada | Glow Studio Salon',
    metaDesc: 'Frizz-free hair with professional keratin at Glow Studio, Vijayawada. Clear pricing, Olaplex care, senior stylists. WhatsApp booking available.',
    internalLinks: ['Link to /services/keratin → "keratin treatment"', 'Link to /blog/bridal-hair-vijayawada → "bridal hair tips"', 'Link to pillar /hair-care-guide → "hair care guide"'],
    excerpt: 'Humidity in Vijayawada can undo your blow-dry by afternoon. Keratin smoothening isn\'t magic straight hair — it\'s manageable, shinier hair for 2–4 months when done with the right formula and aftercare. At Glow Studio, we assess damage first and quote before application...',
  },
  saas: {
    industry: 'SaaS Business',
    business: 'FlowStack — Client Portal Software',
    h1: 'Client Portal Software for Agencies: Features That Actually Reduce Email Chaos',
    structure: ['H2: What is client portal software?', 'H2: Must-have features for agencies', 'H2: FlowStack vs spreadsheets', 'H2: Setup in under a day', 'H2: Pricing FAQ'],
    metaTitle: 'Client Portal Software for Agencies | FlowStack',
    metaDesc: 'Stop status-update emails. FlowStack gives clients one portal for files, approvals & reports. Free 14-day trial for freelancers and agencies.',
    internalLinks: ['Link to /features → "client portal features"', 'Link to /blog/freelancer-client-management → "freelancer client tips"', 'Link to pillar /agency-operations → "agency operations guide"'],
    excerpt: 'Agencies lose hours to "just checking in" emails and scattered Google Drive links. Client portal software centralizes deliverables, approvals, and automated status reports — if you pick a tool that matches how you already work in Notion or Slack. FlowStack connects both...',
  },
}
