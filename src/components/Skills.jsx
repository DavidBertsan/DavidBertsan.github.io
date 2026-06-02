const groups = [
  {
    label: 'Mobile',
    skills: ['Kotlin', 'Android', 'Jetpack Compose', 'KMP', 'MVVM', 'Clean Architecture'],
  },
  {
    label: 'Backend',
    skills: ['Ktor', 'PostgreSQL', 'Docker', 'REST API', 'HikariCP'],
  },
  {
    label: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'JavaScript', 'HTML & CSS'],
  },
  {
    label: 'Tools',
    skills: ['Android Studio', 'IntelliJ IDEA', 'Git', 'GitHub', 'Gradle'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-surface/40">
      <div className="max-w-3xl mx-auto">
        <p className="reveal text-accent text-sm font-medium tracking-widest uppercase mb-3">
          Skills
        </p>
        <h2 className="reveal reveal-delay-1 text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
          What I work with
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {groups.map((group, i) => (
            <div
              key={group.label}
              className={`reveal reveal-delay-${(i % 4) + 1}`}
            >
              <h3 className="text-sm font-semibold text-accent tracking-widest uppercase mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm text-gray-300 bg-white/5 border border-white/8 rounded-md hover:border-accent/40 hover:text-white transition-all duration-200"
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
