import { useLang } from '../LangContext'

// Each material is tied to the work where it was actually used.
const materials = [
  { name: 'Java · Spring Boot', where: ['YListo'], main: true },
  { name: 'Spring Security · JWT', where: ['YListo'], main: true },
  { name: 'PostgreSQL · JPA / Hibernate', where: ['YListo', 'QuickAdapt Backend'], main: true },
  { name: 'JUnit 5 · Mockito · Testcontainers', where: ['YListo'], main: true },
  { name: 'Docker · GitHub Actions', where: ['YListo'] },
  { name: 'Kotlin · Ktor', where: ['QuickAdapt Backend', 'Client App'] },
  { name: 'Kotlin Multiplatform · Jetpack Compose', where: ['QuickAdapt', 'Client App'] },
  { name: 'Clean Architecture · MVVM', where: ['QuickAdapt', 'Client App'] },
  { name: 'REST APIs · Git · Scrum', where: ['Everywhere'] },
]

export default function Skills() {
  const { lang, t } = useLang()

  return (
    <section id="skills" className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <p className="reveal part-label mb-6">{t.part} 02 — {t.skills_label}</p>
        <h2 className="reveal reveal-delay-1 font-display font-semibold text-4xl sm:text-5xl text-ink mb-12 tracking-tight max-w-3xl">
          {t.skills_heading}
        </h2>

        <div className="reveal reveal-delay-2 frame overflow-x-auto">
          <table className="w-full text-left">
            <thead className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">
              <tr className="border-b border-ink">
                <th className="px-4 py-3 w-12 font-medium">#</th>
                <th className="px-4 py-3 font-medium">{t.skills_cols[0]}</th>
                <th className="px-4 py-3 font-medium">{t.skills_cols[1]}</th>
              </tr>
            </thead>
            <tbody>
              {materials.map((m, i) => (
                <tr key={m.name} className="border-b border-ink/15 last:border-0 hover:bg-paper-deep/60 transition-colors">
                  <td className="px-4 py-3 font-mono text-xs text-ink-soft">{String(i + 1).padStart(2, '0')}</td>
                  <td className={`px-4 py-3 ${m.main ? 'font-semibold text-ink' : 'text-ink'}`}>
                    {m.main && <span className="text-check mr-2" aria-hidden="true">●</span>}
                    {m.name}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-ink-soft">
                    {m.where.map(w => (w === 'Everywhere' && lang === 'es' ? 'En todo' : w === 'Everywhere' ? 'Everything' : w)).join(' · ')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
