import { useState, useEffect } from 'react'
import { useLang } from '../LangContext'

const projects = [
  {
    title: 'YListo',
    wip: true,
    description: {
      en: 'Management for small businesses (butcher shops, bars, clothing stores): clock-in, team and inventory. One cloud app for all of them, where each business only ever sees its own data. Rebuilt from my final-year project, this time in Java and Spring Boot.',
      es: 'Gestión para pequeños negocios (carnicerías, bares, tiendas de ropa): fichaje, equipo e inventario. Una sola app en la nube para todos, donde cada negocio solo ve sus propios datos. Reconstruido a partir de mi proyecto final, esta vez con Java y Spring Boot.',
    },
    facts: {
      en: ['JWT auth with roles', 'Multi-tenant: the business comes from the token', '49 tests: unit, web and integration with real PostgreSQL'],
      es: ['Autenticación JWT con roles', 'Multi-tenant: el negocio sale del token', '49 tests: unitarios, web e integración con PostgreSQL real'],
    },
    tags: ['Java 25', 'Spring Boot 4', 'Spring Security', 'PostgreSQL', 'Testcontainers', 'Docker'],
    github: 'https://github.com/DavidBertsan/ylisto-backend',
    terminal: true,
  },
  {
    title: 'QuickAdapt',
    description: {
      en: "Most SMEs manage their business with spreadsheets or tools that don't fit. QuickAdapt covers inventory, time tracking, projects and messaging in one app — with its own backend, multi-company support and Clean Architecture from day one.",
      es: 'La mayoría de las pymes gestionan su negocio con hojas de cálculo o herramientas que no encajan. QuickAdapt cubre inventario, control de jornada, proyectos y mensajería en una app — con backend propio, soporte multiempresa y Clean Architecture desde el primer día.',
    },
    images: ['/screenshots/quickadapt.png', '/screenshots/quickadapt-light.png', '/screenshots/quickadapt-messages.png', '/screenshots/quickadapt-movements.png'],
    tags: ['Kotlin', 'KMP', 'Jetpack Compose', 'Clean Architecture'],
    github: 'https://github.com/DavidBertsan/QuickAdapt',
  },
  {
    title: 'QuickAdapt Backend',
    description: {
      en: "The server behind QuickAdapt. Multi-tenant PostgreSQL with soft delete to keep each company's data isolated, BCrypt auth and HikariCP connection pooling.",
      es: 'El servidor detrás de QuickAdapt. PostgreSQL multi-tenant con borrado lógico para aislar los datos de cada empresa, autenticación BCrypt y pool de conexiones con HikariCP.',
    },
    tags: ['Kotlin', 'Ktor', 'PostgreSQL', 'HikariCP', 'BCrypt'],
    github: 'https://github.com/DavidBertsan/QuickAdapt_backend',
  },
  {
    title: 'Client App',
    description: {
      en: 'Managing hosting, domains and DNS from a phone — that was the gap. Built during my internship alongside another developer, against a real REST API with JWT auth and automatic refresh. Includes a demo mode with mocks so it runs without the real server.',
      es: 'Gestionar hosting, dominios y DNS desde el móvil — ese era el hueco. Construida en mis prácticas junto a otro desarrollador, contra una API REST real con autenticación JWT y refresco automático. Incluye un modo demo con mocks para funcionar sin el servidor real.',
    },
    images: ['/screenshots/clientapp-login.png', '/screenshots/clientapp.png', '/screenshots/clientapp-domains.png', '/screenshots/clientapp-hostings.png'],
    tags: ['Kotlin', 'KMP', 'Jetpack Compose', 'Ktor', 'Koin'],
    github: 'https://github.com/DavidBertsan/client-app',
  },
]

/** YListo has no UI yet, so we show what it does: the real API flow. */
function ApiTrace() {
  const lines = [
    ['POST', '/signup', '201 Created'],
    ['POST', '/login', '200 OK · token'],
    ['POST', '/clockings/clock-in', '201 Created'],
    ['GET', '/team', '200 OK'],
    ['GET', '/products', '200 OK'],
  ]
  return (
    <div className="bg-ink text-paper font-mono text-xs sm:text-sm p-4 sm:p-5 mb-6 overflow-x-auto" aria-label="API flow">
      {lines.map(([method, path, result]) => (
        <div key={path} className="flex gap-3 whitespace-nowrap leading-7">
          <span className="text-paper/50 w-10">{method}</span>
          <span className="flex-1">{path}</span>
          <span className="text-[#7FD3A1]">✓ {result}</span>
        </div>
      ))}
    </div>
  )
}

export default function Projects() {
  const { lang, t } = useLang()
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    const onKey = (e) => {
      if (!lightbox) return
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox(lb => ({ ...lb, index: (lb.index + 1) % lb.images.length }))
      if (e.key === 'ArrowLeft') setLightbox(lb => ({ ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length }))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  return (
    <>
      <section id="projects" className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="reveal part-label mb-6">{t.part} 03 — {t.projects_label}</p>
          <h2 className="reveal reveal-delay-1 font-display font-semibold text-4xl sm:text-5xl text-ink mb-14 tracking-tight">
            {t.projects_heading}
          </h2>

          <div className="space-y-14">
            {projects.map((project, i) => (
              <article key={project.title} className="reveal frame p-5 sm:p-8">
                <header className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-ink-soft mb-1">
                      {t.part} 03.{i + 1}
                    </p>
                    <h3 className="font-display font-semibold text-3xl text-ink">{project.title}</h3>
                  </div>
                  {project.wip && <span className="stamp mt-2">{t.wip}</span>}
                </header>

                {project.terminal && <ApiTrace />}

                {project.images && (
                  <div className="mb-6 flex gap-4 overflow-x-auto pb-2">
                    {project.images.map((src, idx) => (
                      <button
                        key={src}
                        onClick={() => setLightbox({ images: project.images, index: idx })}
                        className="flex-shrink-0 border border-ink/30 bg-paper-deep p-1.5 hover:border-ink transition-colors cursor-zoom-in"
                        aria-label={`${project.title} screenshot ${idx + 1}`}
                      >
                        <img src={src} alt="" className="h-48 sm:h-56 w-auto" loading="lazy" />
                      </button>
                    ))}
                  </div>
                )}

                <p className="text-ink-soft leading-relaxed mb-5 max-w-3xl">{project.description[lang]}</p>

                {project.facts && (
                  <ul className="mb-6 space-y-1.5">
                    {project.facts[lang].map(fact => (
                      <li key={fact} className="flex gap-2 text-sm text-ink">
                        <span className="text-check" aria-hidden="true">✓</span>
                        {fact}
                      </li>
                    ))}
                  </ul>
                )}

                <footer className="flex flex-wrap items-end justify-between gap-4 pt-5 border-t border-ink/20">
                  <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-ink-soft">
                    <span className="uppercase tracking-wider">{t.spec_stack}:</span>
                    {project.tags.join(' · ')}
                  </div>
                  <a href={project.github} target="_blank" rel="noreferrer" className="ink-link">
                    {t.spec_code} ↗
                  </a>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute top-4 right-4 text-paper/70 hover:text-paper p-2"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>

          {lightbox.images.length > 1 && (
            <button
              className="absolute left-2 sm:left-4 text-paper/70 hover:text-paper p-2"
              onClick={(e) => { e.stopPropagation(); setLightbox(lb => ({ ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length })) }}
              aria-label="Previous"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
          )}

          <img
            src={lightbox.images[lightbox.index]}
            alt="Screenshot expanded"
            className="max-h-[85vh] max-w-[80vw] border-4 border-paper"
            onClick={(e) => e.stopPropagation()}
          />

          {lightbox.images.length > 1 && (
            <button
              className="absolute right-2 sm:right-4 text-paper/70 hover:text-paper p-2"
              onClick={(e) => { e.stopPropagation(); setLightbox(lb => ({ ...lb, index: (lb.index + 1) % lb.images.length })) }}
              aria-label="Next"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          )}

          <div className="absolute bottom-5 flex gap-2">
            {lightbox.images.map((src, i) => (
              <span key={src} className={`w-2 h-2 ${i === lightbox.index ? 'bg-paper' : 'bg-paper/30'}`} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
