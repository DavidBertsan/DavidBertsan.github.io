import { useLang } from '../LangContext'

const projects = [
  {
    title: 'Client App',
    description: {
      en: 'KMP mobile app built during an internship to manage hosting services, domains, DNS records and servers through a custom REST API. Features JWT auth with token refresh and demo mode with mock data.',
      es: 'App móvil KMP desarrollada durante prácticas para gestionar servicios de hosting, dominios, registros DNS y servidores a través de una API REST propia. Incluye autenticación JWT con refresh token y modo demo con datos mock.',
    },
    tags: ['Kotlin', 'KMP', 'Jetpack Compose', 'Clean Architecture', 'Ktor', 'Koin'],
    github: 'https://github.com/DavidBertsan/client-app',
    accent: '#f59e0b',
  },
  {
    title: 'QuickAdapt',
    description: {
      en: 'Business management app for SMEs — inventory, time tracking, projects, internal messaging and analytics. Built as my TFG for the DAM degree.',
      es: 'App de gestión empresarial para PYMEs — inventario, control de jornada, proyectos, mensajería interna y analíticas. Desarrollado como TFG del ciclo DAM.',
    },
    tags: ['Kotlin', 'KMP', 'Jetpack Compose', 'Clean Architecture', 'Ktor Client'],
    github: 'https://github.com/DavidBertsan/QuickAdapt',
    accent: '#6366f1',
  },
  {
    title: 'QuickAdapt Backend',
    description: {
      en: 'REST API server for QuickAdapt. Multi-tenant PostgreSQL schema with soft delete, BCrypt authentication and HikariCP connection pooling.',
      es: 'Servidor REST API para QuickAdapt. Esquema PostgreSQL multi-tenant con soft delete, autenticación BCrypt y pool de conexiones HikariCP.',
    },
    tags: ['Ktor', 'PostgreSQL', 'HikariCP', 'BCrypt'],
    github: 'https://github.com/DavidBertsan/QuickAdapt_backend',
    accent: '#8b5cf6',
  },
]

export default function Projects() {
  const { lang, t } = useLang()

  return (
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
  )
}
