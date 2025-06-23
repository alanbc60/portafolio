
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react';
import Card from './Card';

import {arrayProjects} from '../datos/data'
import Education from './Education';

function Projects() {

    const [seleccionNavegacion,setSeleccionNavegacion] = useState('proyectos');
    const handleProyectos = () => {
         setSeleccionNavegacion('proyectos');
    }
    const handleEducacion = () => {
        setSeleccionNavegacion('educacion');
    }

 
    return (
      <section className="projects_education-section">
        {/* navegacion entre proyectos y educacion */}
        <div className="navegation-container">
            <button className="navegacion-button" onClick={handleProyectos}>Proyectos</button>
            <button className="navegacion-button" onClick={handleEducacion}>Educación</button>
            <button className="navegacion-button">Certificados</button>
        </div>
        {seleccionNavegacion === 'proyectos' ? (
            <div className="proyectos-container">
                {arrayProjects.map((proyecto, index) => (
                    <Card key={index} {...proyecto} />
                ))}
            </div>
        ) : (
            <Education/>
        )}

      </section>
    );
      }
      

export default Projects