/* eslint-disable react/prop-types */
function Card({title, description, image, link, lenguajes}) {
    return (
      <div className="card-container">

        <img className="card-image"
          src={image.src}
          alt={image.alt}  
        />

        <div className="card-content">
          <h2>{title}</h2>
          <h4>{description}</h4>
          {/* tecnologias del proyecto */}
          <div className="card-level">
                {lenguajes.map ((tecnologia, index) => (
                    <img key={index} src={tecnologia.icono} alt={tecnologia.name} />
                ))}
          </div>
          {/* boton de link */}
          <a href={link} target="_blank" rel="noopener noreferrer" className="card-button">Ver Proyecto</a>
        </div>
      </div>
    );
}

export default Card
