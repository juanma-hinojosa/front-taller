import "../css/pages/projects.css";

import ProjectHeroVid from "/public/videos/project-hero.mp4";
import HeroSectionVidComponent from "../components/HeroSectionVid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

function ProjectPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          "https://backendtaller.onrender.com/api/projects"
        );
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error("Error cargando proyectos", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <HeroSectionVidComponent video={ProjectHeroVid} />
      <h1>Proyectos Realizados</h1>
      <p>Algunos de los autos que pasaron por nuestras manos.</p>

      {/* Reemplazar por un .map() con backend después */}
      <div className="projects-page container">
        <h1>Proyectos del Taller</h1>
        <div className="public-projects">
          {/* <div className="project-grid">
            {projects.map((proj) => (
              <Link
                to={`/proyecto/${proj.slug}`}
                key={proj._id}
                className="project-card"
              >
                <img
                  src={proj.portada}
                  alt={proj.title}
                />
                <h3>{proj.title}</h3>
                <p>{proj.resumen}</p>
              </Link>
            ))}
          </div> */}

          {loading ? (
            <div className="loader">
              {/* <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQoKCgpKSkn5+fp6enqampoSEhP///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnH0IkY9oWACH5BAUKAAAALAAAAAAQABAAAAAzjI63P5OjCEgG4nD4TAUwEjoMnAdOmGZbExzbmWJXFbiWEYAOw==" alt="Cargando..." /> */}
              <p>Cargando proyectos...</p>
            </div>
          ) : (
            <div className="project-grid">
              {projects.map((proj) => (
                <ProjectCard key={proj._id} proj={proj} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProjectPage;
