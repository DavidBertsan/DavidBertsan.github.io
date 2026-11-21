import { useLang } from '../LangContext'

export default function Hero() {
  const { lang, t } = useLang()
  const rows = Object.values(t.hero_block)

  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 pt-20 pb-16">
      <div className="max-w-5xl w-full mx-auto animate-fade-in">
        <p className="part-label mb-8">{t.sheet} 01 · {t.part} 00</p>

        <h1 className="font-display font-extrabold text-ink leading-[0.95] tracking-tight text-[clamp(3rem,11vw,7.5rem)]">
          David<br />Bertomeu<span className="text-check">.</span>
        </h1>

        {/* Dimension line under the name, like a measured drawing */}
        <div className="mt-6 mb-10 flex flex-wrap items-center gap-3 max-w-xl">
          <div className="flex flex-1 min-w-[5rem] items-center">
            <span className="w-px h-3 bg-ink" />
            <span className="h-px flex-1 bg-ink origin-left animate-draw" />
            <span className="w-px h-3 bg-ink" />
          </div>
          <span className="font-mono text-xs text-ink-soft">{t.hero_role}</span>
        </div>

        <div>
          {/* Title block (cajetín) of the drawing */}
          <dl className="frame w-full md:w-[22rem] font-mono text-xs">
            {rows.map(([label, value], i) => (
              <div key={label} className={`grid grid-cols-[6.5rem_1fr] ${i > 0 ? 'border-t border-ink/30' : ''}`}>
                <dt className="px-3 py-2 uppercase tracking-wider text-ink-soft border-r border-ink/30">{label}</dt>
                <dd className="px-3 py-2 text-ink">
                  {label === t.hero_block.status[0] ? (
                    <span className="inline-flex items-center gap-1.5 text-check font-semibold">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                        <path d="M4 12l5 5L20 6" />
                      </svg>
                      {value}
                    </span>
                  ) : value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
          <a href="#projects" className="ink-link">{t.hero_cta} ↓</a>
          <a href={lang === 'es' ? '/CV.pdf' : '/CV_EN.pdf'} download className="ink-link">{t.hero_cv} ↗</a>
          <a href="https://github.com/DavidBertsan" target="_blank" rel="noreferrer" className="ink-link">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/david-bertomeu-sanchez-923b5b337" target="_blank" rel="noreferrer" className="ink-link">LinkedIn ↗</a>
        </div>
      </div>
    </section>
  )
}
