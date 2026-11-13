import '@styles/projectFeature.css';
import { ImageFrame } from './ImageFrame';
import type { Project } from '@app-types/typesPortfolio';
import { Tag } from '@components/Tag';

interface ProjectFeatureProps {
  project: Project;
  index: number;
  reverse?: boolean;
}

function ProjectFeature({ project, index, reverse = false }: ProjectFeatureProps) {
  return (
    <article className={`feature${reverse ? " feature--reverse" : ""}`}>
      <div className="feature__media">
        <ImageFrame image={project.image} aspectRatio="4 / 3" />
      </div>
      <div className="feature__body">
        <span className="feature__num" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        <Tag tone="neutral">{project.tag}</Tag>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="feature__stack" aria-label="Tecnologías">
          {project.stack.map((s) => <li key={s}><Tag tone="accent">{s}</Tag></li>)}
        </ul>
        <a className="feature__link" href={project.href}>Ver proyecto</a>
      </div>
    </article>
  );
}

export default ProjectFeature;