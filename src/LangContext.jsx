import { createContext, useContext, useState } from 'react'

const translations = {
  en: {
    nav: ['About', 'Skills', 'Projects', 'Contact'],
    hero_greeting: "Hello, I'm",
    hero_titles: ['Android Developer', 'Kotlin Enthusiast', 'DAM Graduate'],
    hero_cta: 'View Projects',
    hero_scroll: 'Scroll',
    about_label: 'About me',
    about_heading: 'Building things that matter',
    about_p1: "I'm a 2nd-year Multiplatform Application Development (DAM) student based in Spain, building a solid foundation in software development — with a focus on clean architecture, attention to detail, and learning fast.",
    about_p2: "Before tech, I worked in the service sector. That background gave me something formal education doesn't always cover: responsibility, adaptability, and the ability to perform under pressure. I bring those habits into every line of code I write.",
    about_p3_pre: "I'm looking to join a team where I can ",
    about_p3_hl: 'contribute from day one',
    about_p3_suf: ' and keep growing as a junior developer. Strong preference for places where good engineering practices actually matter.',
    skills_label: 'Skills',
    skills_heading: 'What I work with',
    skills_tools: 'Tools',
    projects_label: 'Projects',
    projects_heading: "Things I've built",
    contact_label: 'Contact',
    contact_heading: "Let's talk",
    contact_body: "I'm open to new opportunities. If you have a role, a project, or just want to connect — reach out.",
  },
  es: {
    nav: ['Sobre mí', 'Habilidades', 'Proyectos', 'Contacto'],
    hero_greeting: 'Hola, soy',
    hero_titles: ['Desarrollador Android', 'Entusiasta de Kotlin', 'Graduado en DAM'],
    hero_cta: 'Ver proyectos',
    hero_scroll: 'Bajar',
    about_label: 'Sobre mí',
    about_heading: 'Construyendo cosas que importan',
    about_p1: 'Soy estudiante de 2.º año de Desarrollo de Aplicaciones Multiplataforma (DAM) en España, construyendo una base sólida en desarrollo de software — con foco en arquitectura limpia, atención al detalle y aprendizaje rápido.',
    about_p2: 'Antes de la tecnología, trabajé en el sector servicios. Esa experiencia me dio algo que la formación formal no siempre cubre: responsabilidad, adaptabilidad y la capacidad de rendir bajo presión. Esos hábitos los traigo a cada línea de código que escribo.',
    about_p3_pre: 'Busco unirme a un equipo donde pueda ',
    about_p3_hl: 'aportar desde el primer día',
    about_p3_suf: ' y seguir creciendo como desarrollador junior. Prefiero entornos donde las buenas prácticas de ingeniería realmente importan.',
    skills_label: 'Habilidades',
    skills_heading: 'Con qué trabajo',
    skills_tools: 'Herramientas',
    projects_label: 'Proyectos',
    projects_heading: 'Lo que he construido',
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
