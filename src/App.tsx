import Nav from "@components/Nav";
import { certificates, education, featuredProjects, indexProjects, navLinks, profile } from "./data/portfolio";
import { useTheme } from "@hooks/useTheme";
import Hero from "@components/Hero";
import SectionHeader from "@components/SectionHeader";
import ProjectFeature from "@components/ProjectFeature";
import { ProjectIndex } from "@components/ProjectIndex";
import { EducationSection } from "@components/EducationSection";

function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="page">
      <div className="page__inner">
        <Nav brand={profile.name} links={navLinks} theme={theme} onToggleTheme={toggle} />
        <main>
          <Hero profile={profile} />
          <section id="proyectos" aria-labelledby="proyectos-title">
            <SectionHeader 
              id="proyectos-title" 
              title="Proyectos" 
              count={featuredProjects.length} 
            />
            {featuredProjects.map((p, i) => (
              <ProjectFeature key={p.id} project={p} index={i} reverse={i % 2 === 1} />
            ))} 
          </section>
          <ProjectIndex projects={indexProjects} />
          <EducationSection education={education} certificates={certificates} />
        </main>
      </div>
    </div>
  );
}

export default App
