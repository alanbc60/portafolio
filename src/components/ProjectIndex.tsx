import type { IndexProject } from "@app-types/typesPortfolio";
import { ProjectRow } from "@components/ProjectRow";
import SectionHeader from "@components/SectionHeader";
import "@styles/projectIndex.css";

export function ProjectIndex({ projects }: { projects: IndexProject[] }) {
  return (
    <section className="project-index" aria-labelledby="mas-proyectos">
      <SectionHeader id="mas-proyectos" title="Más proyectos" count={projects.length} />
      <ul className="project-index__list">
        {projects.map((p) => <ProjectRow key={p.id} project={p} />)}
      </ul>
    </section>
  );
}
