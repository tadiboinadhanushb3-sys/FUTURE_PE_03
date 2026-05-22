import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Workflow from './components/Workflow'
import RepoStructure from './components/RepoStructure'
import PromptExamples from './components/PromptExamples'
import BlogOutputs from './components/BlogOutputs'
import Tools from './components/Tools'
import GitHubDocs from './components/GitHubDocs'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Workflow />
        <RepoStructure />
        <PromptExamples />
        <BlogOutputs />
        <Tools />
        <GitHubDocs />
      </main>
      <Footer />
    </div>
  )
}
