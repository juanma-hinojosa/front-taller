import { useState } from "react";
import { Link } from "react-router-dom";
// import "/src/css/ProjectCard.css";

const ProjectCard = ({ proj }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Link to={`/proyecto/${proj.slug}`} className="project-card">
      <div className="img-wrapper">
        {!imgLoaded && (
          <div className="img-loader">
            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQoKCgpKSkn5+fp6enqampoSEhP///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnH0IkY9oWACH5BAUKAAAALAAAAAAQABAAAAAzjI63P5OjCEgG4nD4TAUwEjoMnAdOmGZbExzbmWJXFbiWEYAOw==" alt="Cargando imagen..." />
          </div>
        )}
        <img
          src={proj.portada}
          alt={proj.title}
          style={{ display: imgLoaded ? "block" : "none" }}
          onLoad={() => setImgLoaded(true)}
        />
      </div>
      <h3>{proj.title}</h3>
      <p>{proj.resumen}</p>
    </Link>
  );
};

export default ProjectCard;
