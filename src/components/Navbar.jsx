import { useEffect, useState } from 'react'
import { useLang } from '../LangContext'

const hrefs = ['#about', '#skills', '#projects', '#contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { lang, toggle, t } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur-sm border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between font-mono text-xs uppercase tracking-wider">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-ink hover:text-check transition-colors"
        >
          D.B. <span className="text-ink-soft">/ {t.sheet} 01</span>
        </button>
        <ul className="flex items-center gap-5 sm:gap-7">
          {t.nav.map((label, i) => (
            <li key={hrefs[i]} className="hidden sm:block">
              <a href={hrefs[i]} className="text-ink-soft hover:text-ink transition-colors">
                <span className="text-check">0{i + 1}</span> {label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggle}
              aria-label={lang === 'en' ? 'Cambiar a español' : 'Switch to English'}
              className="text-ink border border-ink/60 px-2 py-0.5 hover:bg-ink hover:text-paper transition-colors"
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
