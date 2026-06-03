import { useLang } from '../LangContext'

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="reveal text-accent text-sm font-medium tracking-widest uppercase mb-3">
          {t.about_label}
        </p>
        <h2 className="reveal reveal-delay-1 text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">
          {t.about_heading}
        </h2>

        <div className="reveal reveal-delay-2 flex items-center gap-6 mb-8">
          <img
            src="https://github.com/DavidBertsan.png"
            alt="David Bertomeu"
            className="w-20 h-20 rounded-full border-2 border-accent/30 flex-shrink-0"
          />
          <p className="text-gray-500 text-sm">
            David Bertomeu Sánchez · Spain
          </p>
        </div>

        <div className="reveal reveal-delay-3 space-y-4 text-gray-400 text-lg leading-relaxed">
          <p>{t.about_p1}</p>
          <p>{t.about_p2}</p>
          <p>
            {t.about_p3_pre}
            <span className="text-white font-medium">{t.about_p3_hl}</span>
            {t.about_p3_suf}
          </p>
        </div>
      </div>
    </section>
  )
}
