import type { IndexProject } from "@app-types/typesPortfolio";
import { Tag } from "./Tag";
import "@styles/projectRow.css";

export function ProjectRow({ project }: { project: IndexProject }) {
  return (
    <li className="row">
      <span className="row__num">{project.num}</span>
      <div className="row__thumb halftone" aria-hidden="true" />
      <div className="row__info">
        <h3>{project.title}</h3>
        <span className="row__stack">{project.stack}</span>
      </div>
      <Tag tone="neutral">{project.tag}</Tag>
      <a className="row__link" href={project.href} aria-label={`Ver ${project.title}`}>Ver</a>
    </li>
  );
}
