import { useLang } from '../LangContext'

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <p className="reveal part-label mb-6">{t.part} 01 — {t.about_label}</p>
        <h2 className="reveal reveal-delay-1 font-display font-semibold text-4xl sm:text-5xl text-ink mb-12 tracking-tight">
          {t.about_heading}
        </h2>

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12">
          <div className="reveal reveal-delay-2 space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>{t.about_p1}</p>
            <p>{t.about_p2}</p>
            <p className="text-ink font-medium">{t.about_p3}</p>
          </div>

          <div className="reveal reveal-delay-3">
            <figure className="frame p-3 mb-8 w-40">
              <img
                src="https://github.com/DavidBertsan.png"
                alt="David Bertomeu"
                className="w-full aspect-square object-cover grayscale contrast-125"
              />
              <figcaption className="font-mono text-[10px] uppercase tracking-wider text-ink-soft mt-2">
                Fig. 1 — D. Bertomeu
              </figcaption>
            </figure>

            {/* Timeline drawn as a vertical axis with nodes */}
            <ol className="relative border-l border-ink ml-1.5">
              {t.timeline.map(([when, what], i) => {
                const last = i === t.timeline.length - 1
                return (
                  <li key={when} className="pl-6 pb-6 last:pb-0 relative">
                    <span
                      className={`absolute -left-[7px] top-1 w-3 h-3 border border-ink ${last ? 'bg-check border-check' : 'bg-paper'}`}
                      aria-hidden="true"
                    />
                    <p className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">{when}</p>
                    <p className={`text-sm ${last ? 'text-ink font-semibold' : 'text-ink'}`}>{what}</p>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
