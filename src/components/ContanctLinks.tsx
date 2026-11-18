import { contactLinks } from "../data/portfolio";
import "@styles/contactLinks.css";


function ContanctLinks() {
  return (
    <section className="contact" id="contacto" aria-labelledby="contacto-title">
      <h2 className="contact__label" id="contacto-title">Contacto</h2>
      <ul className="contact__list">
        {contactLinks.map((l) => (
          <li key={l.label}>
            <a href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label} <span aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );

}

export default ContanctLinks