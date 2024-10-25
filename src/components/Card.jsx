/* eslint-disable react/prop-types */
function Card({title, description, image, link}) {
    return (
      <div className="card-container">
        <img className="card-image"
          src={image.src}
          alt={image.alt}
          
        />
        <div className="card-content">
          <h2>{title}</h2>
          <h4>{description}</h4>
          {/* Contenido de la card */}
          <div className="card-level">
            <span className="level-icon">📈</span>
            <span className="level-text">HighLevel</span>
          </div>
          {/* boton de link */}
          <a href={link} target="_blank" rel="noopener noreferrer" className="card-button">Ver Proyecto</a>
        </div>
      </div>
    );
}

export default Card
