import { createContext, useContext, useState } from 'react'

const translations = {
  en: {
    nav: ['About', 'Skills', 'Projects', 'Contact'],
    hero_role: 'Backend Developer (Java, Spring Boot)',
    hero_block: {
      education: ['Education', 'DAM (2026)'],
      author: ['Name', 'David Bertomeu Sánchez'],
      status: ['Status', 'Available'],
      location: ['Location', 'Spain, remote or hybrid'],
    },
    hero_cv: 'Download CV',
    hero_cta: 'Projects',
    about_heading: 'About me',
    about_p1: 'I started a Computer Science degree and left it. Years later I studied DAM (Multiplatform Application Development), where I worked with Kotlin, Android and my first backend.',
    about_p2: 'My final-year project was QuickAdapt, a business management app built with Kotlin Multiplatform and a Ktor backend. During my internship I built, as part of a development team working in SCRUM, an app used by the company’s clients.',
    about_p3: 'I rebuilt QuickAdapt’s backend as YListo, with Java and Spring Boot, and I’m now building its app.',
    timeline: [
      ['Before', 'Computer Science degree, not finished'],
      ['Then', 'DAM: Kotlin, Android, my first backend'],
      ['Internship', 'Client App, used by real clients'],
      ['Now', 'Backend: Java, Spring Boot, PostgreSQL'],
    ],
    skills_heading: 'Technologies and where I used them',
    skills_cols: ['Technology', 'Used in'],
    projects_heading: 'Projects',
    wip: 'Backend complete',
    spec_stack: 'Stack',
    spec_code: 'Source',
    contact_heading: 'Contact',
    contact_body: 'I’m looking for a junior backend role, remote or hybrid. I can relocate to Madrid or Barcelona.',
  },
  es: {
    nav: ['Sobre mí', 'Tecnologías', 'Proyectos', 'Contacto'],
    hero_role: 'Desarrollador Backend (Java, Spring Boot)',
    hero_block: {
      education: ['Formación', 'DAM (2026)'],
      author: ['Nombre', 'David Bertomeu Sánchez'],
      status: ['Estado', 'Disponible'],
      location: ['Ubicación', 'España, remoto o híbrido'],
    },
    hero_cv: 'Descargar CV',
    hero_cta: 'Proyectos',
    about_heading: 'Sobre mí',
    about_p1: 'Empecé Ingeniería Informática y la dejé. Años después estudié DAM (Desarrollo de Aplicaciones Multiplataforma), donde trabajé con Kotlin, Android y mi primer backend.',
    about_p2: 'Mi proyecto final fue QuickAdapt, una app de gestión empresarial con Kotlin Multiplatform y backend en Ktor. En las prácticas desarrollé, dentro de un equipo de desarrollo con SCRUM, una app que usan los clientes de la empresa.',
    about_p3: 'He reconstruido el backend de QuickAdapt como YListo, con Java y Spring Boot, y ahora estoy haciendo su app.',
    timeline: [
      ['Antes', 'Ingeniería Informática, sin terminar'],
      ['Después', 'DAM: Kotlin, Android, mi primer backend'],
      ['Prácticas', 'Client App, usada por clientes reales'],
      ['Ahora', 'Backend: Java, Spring Boot, PostgreSQL'],
    ],
    skills_heading: 'Tecnologías y dónde las he usado',
    skills_cols: ['Tecnología', 'Usada en'],
    projects_heading: 'Proyectos',
    wip: 'Backend completo',
    spec_stack: 'Stack',
    spec_code: 'Código',
    contact_heading: 'Contacto',
    contact_body: 'Busco un puesto de backend junior, en remoto o híbrido. Puedo trasladarme a Madrid o Barcelona.',
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
