import { createContext, useContext, useState } from 'react'

const translations = {
  en: {
    nav: ['About', 'Skills', 'Projects', 'Contact'],
    hero_greeting: "Hello, I'm",
    hero_titles: ['Android Developer', 'KMP Developer', 'DAM Graduate'],
    hero_cv: 'Download CV',
    hero_cta: 'View Projects',
    hero_scroll: 'Scroll',
    about_label: 'About me',
    about_heading: 'Every piece has a purpose.',
    about_p1: "I once left a Computer Science degree convinced that programming wasn't for me. A few years later, I gave it one more shot — and I didn't just like it, I fell in love with it. With the logic. With how you can start from almost nothing and build something immense where every piece has a purpose.",
    about_p2: "I finished my studies with QuickAdapt — a business management app for SMEs built with Kotlin Multiplatform, Clean Architecture and a custom Ktor + PostgreSQL backend. During my internship I built a real KMP app used by actual clients.",
    about_p3_pre: "I'm looking for an opportunity where I can ",
    about_p3_hl: 'contribute from day one',
    about_p3_suf: ' and keep growing as an Android developer.',
    skills_label: 'Skills',
    skills_heading: 'What I work with',
    skills_tools: 'Tools',
    projects_label: 'Projects',
    projects_heading: 'Selected work',
    contact_label: 'Contact',
    contact_heading: "Let's talk",
    contact_body: "I'm open to new opportunities. If you have a role, a project, or just want to connect — reach out.",
  },
  es: {
    nav: ['Sobre mí', 'Habilidades', 'Proyectos', 'Contacto'],
    hero_greeting: 'Hola, soy',
    hero_titles: ['Desarrollador Android', 'Desarrollador KMP', 'Graduado en DAM'],
    hero_cv: 'Descargar CV',
    hero_cta: 'Ver proyectos',
    hero_scroll: 'Bajar',
    about_label: 'Sobre mí',
    about_heading: 'Cada pieza tiene su propósito.',
    about_p1: 'En un momento dejé una carrera de Ingeniería Informática convencido de que la programación no era para mí. Años después me di una última oportunidad para probarme si era capaz — y no me gustó, no. Me enamoré. De la lógica tras el código, de cómo de nada puedes construir algo inmenso donde cada pieza tiene su propósito.',
    about_p2: 'Terminé el ciclo con QuickAdapt — una app de gestión empresarial para PYMEs con Kotlin Multiplatform, Clean Architecture y backend propio con Ktor y PostgreSQL. En mis prácticas construí una app KMP real usada por clientes reales.',
    about_p3_pre: 'Busco una oportunidad donde pueda ',
    about_p3_hl: 'aportar desde el primer día',
    about_p3_suf: ' y seguir creciendo como desarrollador Android.',
    skills_label: 'Habilidades',
    skills_heading: 'Con qué trabajo',
    skills_tools: 'Herramientas',
    projects_label: 'Proyectos',
    projects_heading: 'Trabajo seleccionado',
    contact_label: 'Contacto',
    contact_heading: 'Hablemos',
    contact_body: 'Estoy abierto a nuevas oportunidades. Si tenés un rol, un proyecto, o simplemente querés conectar — escribime.',
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
