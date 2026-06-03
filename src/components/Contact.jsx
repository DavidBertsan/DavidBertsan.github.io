import { useLang } from '../LangContext'

export default function Contact() {
  const { t } = useLang()

  return (
    <section id="contact" className="py-28 px-6 bg-surface/40">
      <div className="max-w-3xl mx-auto text-center">
        <p className="reveal text-accent text-sm font-medium tracking-widest uppercase mb-3">
          {t.contact_label}
        </p>
        <h2 className="reveal reveal-delay-1 text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          {t.contact_heading}
        </h2>
        <p className="reveal reveal-delay-2 text-gray-400 mb-10 text-lg">
          {t.contact_body}
        </p>

        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:bertodavid4@gmail.com"
            className="px-8 py-3 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            bertodavid4@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/david-bertomeu-sanchez-923b5b337"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 border border-white/10 hover:border-accent/50 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/DavidBertsan"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 border border-white/10 hover:border-accent/50 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
