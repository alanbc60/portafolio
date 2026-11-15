import type {
  Certificate, EducationItem, IndexProject, NavLink, Profile, Project,
} from "@app-types/typesPortfolio";

export const navLinks: NavLink[] = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Educación", href: "#educacion" },
  { label: "Contacto", href: "#contacto" },
];

export const profile: Profile = {
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
    src: `${import.meta.env.BASE_URL}destacada.webp`,
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

const names = [
  "Acadia",
];
const tags = ["Freelance", "Escolar", "Personal", "Servicio social"];
const stacks = ["HTML · CSS · JS", "React · Tailwind", "JavaScript · Java", "HTML · CSS · React"];

export const indexProjects: IndexProject[] = names.map((title, i) => ({
  id: `idx-${i}`,
  num: String(i + featuredProjects.length + 1).padStart(2, "0"),
  title,
  tag: tags[i % tags.length],
  stack: stacks[i % stacks.length],
  href: "#",
}));

export const education: EducationItem[] = [
  {
    id: "ing",
    period: "2019—2024",
    title: "Ingeniería en Computación",
    description: "Añade la institución y una línea sobre tu enfoque.",
  },
  {
    id: "otro",
    period: "Año—Año",
    title: "Otro estudio o bootcamp",
    description: "Reemplaza o elimina este bloque.",
  },
];

export const certificates: Certificate[] = [1, 2, 3].map((n) => ({
  id: `cert-${n}`,
  year: "Año",
  title: "Nombre del certificado",
  issuer: "Emisor",
}));
