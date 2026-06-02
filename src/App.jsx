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
    <div className="min-h-screen bg-base text-gray-300 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5">
        <p>David Bertomeu Sánchez · {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default App
