import type {
  Certificate, ContactLink, EducationItem, IndexProject, NavLink, Profile, Project,
} from "@app-types/typesPortfolio";

export const contactLinks: ContactLink[] = [
  { label: "GitHub", href: "https://github.com/alanbc60" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alan-keveen-bastida-cervantes/" },
  { label: "Email", href: "mailto:alankeveen.bastida@gmail.com" },
];

export const navLinks: NavLink[] = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Educación", href: "#educacion" },
  { label: "Contacto", href: "#contacto" },
];

export const profile: Profile = {
  username: "alanbc - portafolio",
  name: "Alan Bastida",
  role: "Desarrollador Web Full Stack",
  location: "Iztacalco, CDMX",
  summary:
    "Soy un desarrollador web full-stack que le gusta crear interfaces de usuario desafiantes. Me especializo en transformar ideas y diseños en experiencias digitales intuitivas y atractivas.",
  tools: ["HTML", "CSS", "Tailwind", "JavaScript", "React", "Java"],
  contact: [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Email", href: "#" },
  ],
  heroImage: { 
    alt: "Foto destacada", 
    placeholder: "Foto o captura destacada",
    src: `${import.meta.env.BASE_URL}destacada.png`,
  },
};

export const featuredProjects: Project[] = [

  {
    id: "asteci-portal",
    title: "Portal ASTECI",
    tag: "Trabajo",
    description:
      "Portal web para la empresa ASTECI, con información de la compañía, servicios, clientes y contacto.",
    stack: ["HTML", "CSS", "JavaScript", "React", "Astro"],
    href: "https://ist-ssr-asteci-portal-51749073081.us-central1.run.app/home",
    image: { 
      alt: "Captura de Portal ASTECI", 
      placeholder: "Captura de Portal ASTECI",
      src: `${import.meta.env.BASE_URL}banner_asteci.png`
    },
  },

  {
    id: "zapateria",
    title: "Zapatería PG",
    tag: "Freelance",
    description:
      "Catálogo y ficha de producto para una zapatería, con navegación por categorías y carrito de compra.",
    stack: ["HTML", "CSS", "JavaScript", "Java"],
    href: "https://zapaterias-s-g.netlify.app/",
    image: { 
      alt: "Captura de Zapatería PG", 
      placeholder: "Captura de Zapatería PG",
      src: `${import.meta.env.BASE_URL}banner_zapateria.png`
    },
  },
  {
    id: "dmas",
    title: "Página DMAS",
    tag: "Servicio social",
    description:
      "Portal departamental con acceso a seminarios, proyectos de investigación, publicaciones, eventos y lineamientos.",
    stack: ["HTML", "Tailwind", "JavaScript", "React"],
    href: "http://dmas.cua.uam.mx/",
    image: { 
      alt: "Captura de Página DMAS", 
      placeholder: "Captura de Página DMAS",
      src: `${import.meta.env.BASE_URL}banner_dmas.png`
    },
  },
];

const OthersProjects = [
  {
    id: "bytecamp",
    title: "ByteCamp",
    href: "https://bytecamp.netlify.app/",
    tag: "Freelance",
    stacks: ["HTML", "CSS", "TS", "React", "Express", "PostgreSQL"],
    image: {
      alt: "Captura de ByteCamp",
      placeholder: "Captura de ByteCamp",
      src: `${import.meta.env.BASE_URL}banner_bytecamp.png`,
    }
  }
];

export const indexProjects: IndexProject[] = OthersProjects.map((project, i) => ({
  id: `idx-${i}`,
  num: String(i + featuredProjects.length + 1).padStart(2, "0"),
  title: project.title,
  tag: project.tag,
  stack: project.stacks[i % project.stacks.length],
  href: project.href,
  image: project.image,
}));

export const education: EducationItem[] = [
  {
    id: "ing",
    period: "2017—2024",
    title: "Ingeniería en Computación",
    description: "Añade la institución y una línea sobre tu enfoque.",
  },
];

export const certificates: Certificate[] = [
  {
    id: `cert-generation`,
    period: "Enero 2024 — Mayo 2024",
    title: "Bootcamp FullStack Java Developer",
    description: "Bootcamp de programación full-stack Java y Frontend.",
    issuer: "Generation",

  }
];
