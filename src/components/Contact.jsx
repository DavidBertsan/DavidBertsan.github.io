import { useLang } from '../LangContext'

export default function Contact() {
  const { t } = useLang()

  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <p className="reveal part-label mb-6">{t.part} 04 — {t.contact_label}</p>

        <div className="reveal reveal-delay-1 frame p-6 sm:p-10 grid md:grid-cols-[1fr_auto] gap-10 items-end">
          <div>
            <h2 className="font-display font-semibold text-4xl sm:text-5xl text-ink mb-5 tracking-tight">
              {t.contact_heading}
            </h2>
            <p className="text-ink-soft text-lg leading-relaxed max-w-xl mb-8">{t.contact_body}</p>
            <a
              href="mailto:bertodavid4@gmail.com"
              className="inline-block font-mono text-base sm:text-lg text-paper bg-ink px-5 py-3 hover:bg-check transition-colors break-all"
            >
              bertodavid4@gmail.com
            </a>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              <a href="https://www.linkedin.com/in/david-bertomeu-sanchez-923b5b337" target="_blank" rel="noreferrer" className="ink-link">LinkedIn ↗</a>
              <a href="https://github.com/DavidBertsan" target="_blank" rel="noreferrer" className="ink-link">GitHub ↗</a>
            </div>
          </div>

          {/* Signature box of the drawing */}
          <div className="md:w-56 border-t md:border-t-0 md:border-l border-ink/30 pt-6 md:pt-0 md:pl-8">
            <p className="font-display italic text-3xl text-ink mb-1">D. Bertomeu</p>
            <div className="h-px bg-ink mb-2" />
            <p className="font-mono text-[11px] uppercase tracking-wider text-ink-soft mb-4">{t.hero_block.author[0]}</p>
            <span className="stamp !text-check !border-check">✓ {t.approved}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
