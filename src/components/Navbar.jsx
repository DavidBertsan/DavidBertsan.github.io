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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080810]/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl text-white font-semibold tracking-tight hover:opacity-80 transition-opacity"
        >
          d<span className="text-accent">/</span>b
        </button>
        <ul className="flex items-center gap-8">
          {t.nav.map((label, i) => (
            <li key={hrefs[i]}>
              <a
                href={hrefs[i]}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggle}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 border border-white/10 hover:border-accent/50 px-2.5 py-1 rounded-md"
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
