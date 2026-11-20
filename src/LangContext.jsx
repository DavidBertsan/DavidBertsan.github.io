import { createContext, useContext, useState } from 'react'

const translations = {
  en: {
    nav: ['Origin', 'Materials', 'Works', 'Contact'],
    sheet: 'Sheet',
    part: 'Part',
    hero_role: 'Backend Developer · Java & Spring Boot',
    hero_motto: 'Every piece has a purpose.',
    hero_block: {
      project: ['Project', 'A career, built piece by piece'],
      author: ['Author', 'David Bertomeu Sánchez'],
      status: ['Status', 'Available'],
      location: ['Location', 'Spain · Remote or hybrid'],
    },
    hero_cv: 'Download CV',
    hero_cta: 'See the works',
    about_label: 'Origin',
    about_heading: 'I left. I came back. I stayed.',
    about_p1: "I once left a Computer Science degree convinced that programming wasn't for me. A few years later I gave it one last shot — and I didn't just like it, I fell in love with it. With the logic. With how you can start from almost nothing and build something immense where every piece has a purpose.",
    about_p2: 'I finished my studies with QuickAdapt, a business management app built with Kotlin Multiplatform and its own backend. During my internship I built a real app used by real clients.',
    about_p3: 'Now I’m rebuilding that idea as YListo, on Java and Spring Boot — and looking for a team where I can contribute from day one.',
    timeline: [
      ['Before', 'Computer Science degree — left it'],
      ['Then', 'DAM: Kotlin, Android, my first backend'],
      ['Internship', 'Client App, used by real clients'],
      ['Now', 'Backend: Java, Spring Boot, PostgreSQL'],
    ],
    skills_label: 'Bill of materials',
    skills_heading: 'What I build with — and where I used it',
    skills_cols: ['Material', 'Used in'],
    projects_label: 'Works',
    projects_heading: 'Selected works',
    wip: 'Under construction',
    spec_stack: 'Stack',
    spec_code: 'Source',
    contact_label: 'Sign-off',
    contact_heading: 'Shall we talk?',
    contact_body: "I'm open to junior backend roles, remote or hybrid (I can relocate to Madrid or Barcelona). If you have a role, a project, or just want to connect — write to me.",
    approved: 'Approved',
  },
  es: {
    nav: ['Origen', 'Materiales', 'Obras', 'Contacto'],
    sheet: 'Plano',
    part: 'Pieza',
    hero_role: 'Desarrollador Backend · Java & Spring Boot',
    hero_motto: 'Cada pieza tiene su propósito.',
    hero_block: {
      project: ['Proyecto', 'Una carrera, pieza a pieza'],
      author: ['Autor', 'David Bertomeu Sánchez'],
      status: ['Estado', 'Disponible'],
      location: ['Ubicación', 'España · Remoto o híbrido'],
    },
    hero_cv: 'Descargar CV',
    hero_cta: 'Ver las obras',
    about_label: 'Origen',
    about_heading: 'Me fui. Volví. Me quedé.',
    about_p1: 'En un momento dejé una carrera de Ingeniería Informática convencido de que la programación no era para mí. Años después me di una última oportunidad para probarme si era capaz — y no me gustó, no. Me enamoré. De la lógica tras el código, de cómo de nada puedes construir algo inmenso donde cada pieza tiene su propósito.',
    about_p2: 'Terminé el ciclo con QuickAdapt, una app de gestión empresarial con Kotlin Multiplatform y backend propio. En mis prácticas construí una app real usada por clientes reales.',
    about_p3: 'Ahora estoy reconstruyendo esa idea como YListo, con Java y Spring Boot — y busco un equipo donde aportar desde el primer día.',
    timeline: [
      ['Antes', 'Ingeniería Informática — la dejé'],
      ['Después', 'DAM: Kotlin, Android, mi primer backend'],
      ['Prácticas', 'Client App, usada por clientes reales'],
      ['Ahora', 'Backend: Java, Spring Boot, PostgreSQL'],
    ],
    skills_label: 'Lista de materiales',
    skills_heading: 'Con qué construyo — y dónde lo he usado',
    skills_cols: ['Material', 'Usado en'],
    projects_label: 'Obras',
    projects_heading: 'Obras seleccionadas',
    wip: 'En obra',
    spec_stack: 'Stack',
    spec_code: 'Código',
    contact_label: 'Firma',
    contact_heading: '¿Hablamos?',
    contact_body: 'Busco un puesto de backend junior, en remoto o híbrido (puedo trasladarme a Madrid o Barcelona). Si tienes un puesto, un proyecto o simplemente quieres conectar — escríbeme.',
    approved: 'Aprobado',
  },
}

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en')
  const toggle = () => setLang(l => (l === 'en' ? 'es' : 'en'))
  return (
    <LangContext.Provider value={{ lang, toggle, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
