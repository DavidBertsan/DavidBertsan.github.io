import { LangProvider } from './LangContext'
import { useScrollReveal } from './hooks/useScrollReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  useScrollReveal()

  return (
    <LangProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <footer className="py-8 px-4 border-t border-line font-mono text-[11px] uppercase tracking-wider text-ink-soft">
          <div className="max-w-5xl mx-auto">David Bertomeu Sánchez, {new Date().getFullYear()}</div>
        </footer>
      </div>
    </LangProvider>
  )
}

export default App
