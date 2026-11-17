import type { Certificate, EducationItem } from "@app-types/typesPortfolio";
import SectionHeader  from "./SectionHeader";
import "@styles/educationSection.css";

interface EducationSectionProps {
  education: EducationItem[];
  certificates: Certificate[];
}

export function EducationSection({ education, certificates }: EducationSectionProps) {
  return (
    <section className="edu" id="educacion" aria-labelledby="educacion-title">
      <div className="edu__col">
        <SectionHeader id="educacion-title" title="Educación" count={education.length} />
        <ul className="edu__list">
          {education.map((e) => (
            <li key={e.id} className="edu__item">
              <span className="edu__meta">{e.period}</span>
              <h3>{e.title}</h3>
              <p>{e.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="edu__col">
        <SectionHeader id="certificados-title" title="Certificados" count={certificates.length} />
        <ul className="edu__list">
          {certificates.map((c) => (
            <li key={c.id} className="edu__item">
              <span className="edu__meta">{c.period}</span>
              <h3>{c.title}</h3>
              <p>{c.issuer}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
