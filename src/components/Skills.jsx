import { useLang } from '../LangContext'

const featured = ['Java', 'Spring Boot', 'PostgreSQL', 'Kotlin']

const groups = [
  { labelKey: 'Mobile',    skills: ['Jetpack Compose', 'KMP', 'Coroutines', 'MVVM', 'Clean Architecture', 'Koin'] },
  { labelKey: 'Backend',   skills: ['Ktor', 'REST API', 'HikariCP'] },
  { labelKey: 'tools',     skills: ['Android Studio', 'IntelliJ IDEA', 'Git', 'GitHub', 'Scrum'] },
]

export default function Skills() {
  const { t } = useLang()

  return (
    <section id="skills" className="py-28 px-6 bg-surface/40">
      <div className="max-w-3xl mx-auto">
        <p className="reveal text-accent text-sm font-medium tracking-widest uppercase mb-3">
          {t.skills_label}
        </p>
        <h2 className="reveal reveal-delay-1 text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
          {t.skills_heading}
        </h2>

        <div className="reveal mb-10">
          <h3 className="text-sm font-semibold text-accent tracking-widest uppercase mb-4">
            {t.skills_featured}
          </h3>
          <div className="flex flex-wrap gap-3">
            {featured.map((skill, idx) => (
              <span
                key={skill}
                className="chip-animate px-4 py-2 text-base font-semibold text-white bg-accent/15 border border-accent/50 rounded-md hover:bg-accent/25 transition-all duration-200"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {groups.map((group, i) => (
            <div key={group.labelKey} className={`reveal reveal-delay-${(i % 4) + 1}`}>
              <h3 className="text-sm font-semibold text-accent tracking-widest uppercase mb-4">
                {group.labelKey === 'tools' ? t.skills_tools : group.labelKey}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, idx) => (
                  <span
                    key={skill}
                    className="chip-animate px-3 py-1.5 text-sm text-gray-300 bg-white/5 border border-white/8 rounded-md hover:border-accent/40 hover:text-white transition-all duration-200"
                    style={{ animationDelay: `${i * 0.1 + idx * 0.05}s` }}
                  >
                    {skill}
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
