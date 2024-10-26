import bannerDMAS from '../assets/banner_dmas.png';
import bannerZapateriasSg from '../assets/banner_zapateria.png';

export  const arrayProjects = [
    {
        id: 1,
        title: "Zapateria pg",
        description: "Proyecto freelance",
        image: {
            src: bannerZapateriasSg,
            alt: 'Zapaterías S&G',
        },
        link: 'https://zapaterias-s-g.netlify.app/',
        lenguajes: [
            {
                id: 1,
                title: 'HTML',
                icono: 'https://img.icons8.com/color/48/000000/html-5--v1.png'
            },
            {
                id: 2,
                title: 'CSS',
                icono: 'https://img.icons8.com/color/48/000000/css3.png'
            },
            {
                id: 3,
                title: 'JavaScript',
                icono: 'https://img.icons8.com/color/48/000000/javascript.png'
            },
            {
                id: 4,
                title: 'Java',
                icono: 'https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png'
            }
        ],
    },
    {
        id: 2,
        title: "Página DMAS",
        description: "Proyecto servicio social",
        image: {
            src: bannerDMAS,
            alt: 'Pagina DMAS',
        },
        link: 'http://dmas.cua.uam.mx/',
        lenguajes: [
            {
                id: 1,
                title: 'HTML',
                icono: 'https://img.icons8.com/color/48/000000/html-5--v1.png'
            },
            {
                id: 2,
                title: 'Tailwind',
                icono: 'https://img.icons8.com/color/48/000000/tailwindcss.png'
            },
            {
                id: 3,
                title: 'JavaScript',
                icono: 'https://img.icons8.com/color/48/000000/javascript.png'
            },
            {
                id: 4,
                title: 'React JS',
                icono: 'https://img.icons8.com/color/48/000000/react-native.png'
            }
        ],
    }
]

export const tecnologiasFrameworks = [
    {
        id: 1,
        title: 'HTML',
    }
] 