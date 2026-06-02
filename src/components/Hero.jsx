import { useEffect, useState } from 'react'

const titles = ['Android Developer', 'Kotlin Enthusiast', 'DAM Graduate']

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = titles[titleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setTitleIndex((i) => (i + 1) % titles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, titleIndex])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative animate-fade-in">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
          Hello, I'm
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          David Bertomeu
        </h1>
        <div className="h-10 flex items-center justify-center gap-1 mb-8">
          <span className="text-xl md:text-2xl text-gray-400 font-light">
            {displayed}
          </span>
          <span className="w-0.5 h-6 bg-accent animate-blink" />
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://github.com/DavidBertsan"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-accent hover:bg-accent-light text-white text-sm font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/david-bertomeu-sanchez-923b5b337"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-white/10 hover:border-accent/50 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            LinkedIn
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-white/10 hover:border-accent/50 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            View Projects
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 hover:text-gray-400 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
      </a>
    </section>
  )
}
