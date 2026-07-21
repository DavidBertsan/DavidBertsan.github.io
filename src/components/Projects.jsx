import { useState, useEffect } from 'react'
import { useLang } from '../LangContext'

const projects = [
  {
    title: 'QuickAdapt',
    description: {
      en: 'Most SMEs manage their business with spreadsheets or tools that don\'t fit. QuickAdapt covers inventory, time tracking, projects and messaging in one app — with a custom Ktor backend, multi-company support and Clean Architecture from day one.',
      es: 'La mayoría de las PYMEs gestionan su negocio con hojas de cálculo o herramientas que no encajan. QuickAdapt cubre inventario, control de jornada, proyectos y mensajería en una app — con backend Ktor propio, soporte multi-empresa y Clean Architecture desde el primer día.',
    },
    images: ['/screenshots/quickadapt.png', '/screenshots/quickadapt-light.png', '/screenshots/quickadapt-messages.png', '/screenshots/quickadapt-movements.png'],
    tags: ['Kotlin', 'KMP', 'Jetpack Compose', 'Clean Architecture', 'Ktor Client'],
    github: 'https://github.com/DavidBertsan/QuickAdapt',
    accent: '#6366f1',
  },
  {
    title: 'QuickAdapt Backend',
    description: {
      en: 'The server behind QuickAdapt. Multi-tenant PostgreSQL with soft delete to keep each company\'s data isolated, BCrypt auth and HikariCP for production-grade connection handling.',
      es: 'El servidor detrás de QuickAdapt. PostgreSQL multi-tenant con soft delete para aislar datos por empresa, autenticación BCrypt y HikariCP para gestión de conexiones en producción.',
    },
    tags: ['Ktor', 'PostgreSQL', 'HikariCP', 'BCrypt'],
    github: 'https://github.com/DavidBertsan/QuickAdapt_backend',
    accent: '#8b5cf6',
  },
  {
    title: 'Client App — Panel de Control Móvil',
    description: {
      en: 'Managing hosting services, domains and DNS from a phone — that was the gap. Built during my internship alongside another developer, connecting to a custom REST API with JWT auth and auto refresh. Includes full demo mode with mocks so it runs without the real server.',
      es: 'Gestionar servicios de hosting, dominios y DNS desde el móvil — ese era el hueco. Construida durante mis prácticas junto a otro desarrollador, conecta con una API REST propia con autenticación JWT y refresco automático. Incluye modo demo completo con mocks para funcionar sin el servidor real.',
    },
    images: ['/screenshots/clientapp-login.png', '/screenshots/clientapp.png', '/screenshots/clientapp-domains.png', '/screenshots/clientapp-hostings.png'],
    tags: ['Kotlin', 'KMP', 'Jetpack Compose', 'Clean Architecture', 'Ktor', 'Koin'],
    github: 'https://github.com/DavidBertsan/client-app',
    accent: '#f59e0b',
  },
]

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
    <section id="projects" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="reveal text-accent text-sm font-medium tracking-widest uppercase mb-3">
          {t.projects_label}
        </p>
        <h2 className="reveal reveal-delay-1 text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
          {t.projects_heading}
        </h2>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`reveal reveal-delay-${i + 1} group p-6 rounded-xl border border-white/8 bg-surface/60 glow hover:border-accent/30 transition-all duration-300`}
            >
              {project.images && (
                <div className="mb-4 rounded-lg bg-black/20 border border-white/8 flex justify-center gap-6 py-4 px-4 overflow-x-auto">
                  {project.images.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className="h-52 w-auto rounded-lg shadow-xl flex-shrink-0 transition-transform duration-300 hover:scale-105 cursor-zoom-in"
                    onClick={() => setLightbox({ images: project.images, index: idx })}
                    />
                  ))}
                </div>
              )}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-white group-hover:text-accent-light transition-colors">
                    {project.title}
                  </h3>
                  {project.wip && (
                    <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/25">
                      {lang === 'es' ? 'En curso' : 'In Progress'}
                    </span>
                  )}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  className="text-gray-500 hover:text-white transition-colors flex-shrink-0 mt-0.5"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.03-.02-2.03-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description[lang]}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs text-gray-400 bg-white/5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {lightbox && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        onClick={() => setLightbox(null)}
      >
        {/* X */}
        <button
          className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
          onClick={() => setLightbox(null)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        {/* Prev */}
        {lightbox.images.length > 1 && (
          <button
            className="absolute left-4 text-white/70 hover:text-white transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); setLightbox(lb => ({ ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length })) }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
        )}

        <img
          src={lightbox.images[lightbox.index]}
          alt="Screenshot expanded"
          className="max-h-[90vh] max-w-[80vw] rounded-xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />

        {/* Next */}
        {lightbox.images.length > 1 && (
          <button
            className="absolute right-4 text-white/70 hover:text-white transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); setLightbox(lb => ({ ...lb, index: (lb.index + 1) % lb.images.length })) }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        )}

        {/* Dots */}
        <div className="absolute bottom-5 flex gap-2">
          {lightbox.images.map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i === lightbox.index ? 'bg-white' : 'bg-white/30'}`} />
          ))}
        </div>
      </div>
    )}
    </>
  )
}
