// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from './Card';

function projects() {
    const arrayProjects = [

        {
            id: 1,
            title: "Zapateria pg",
            description: "Proyecto freelance",
            image: {
                src: 'https://zapaterias-s-g.netlify.app/static/media/banner.1cd9c3f8.jpg',
                alt: 'Zapaterías S&G',
            },
            link: 'https://zapaterias-s-g.netlify.app/'
        },
        {
            id: 2,
            title: "Página DMAS",
            description: "Proyecto servicio social",
            image: {
                src:'https://zapaterias-s-g.netlify.app/static/media/banner.1cd9c3f8.jpg',
                alt: 'Pagina DMAS',
            },
            link: 'http://dmas.cua.uam.mx/'
        }
    ]

 
    return (
      <div className="proyectos-container">
        {arrayProjects.map((proyecto, index) => (
            <Card key={index} {...proyecto} />
        ))}
      </div>
    );
      }
      

export default projects