import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../css/pages/projectdetails.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`https://backendtaller.onrender.com/api/projects/slug/${slug}`);
        const data = await res.json();
        setProject(data);
      } catch (err) {
        console.error("Error al cargar proyecto", err);
      }
    };

    fetchProject();
  }, [slug]);

  if (!project) return <p>Cargando proyecto...</p>;

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <img src={project.portada} alt={project.title} className="main-img"/>
      <p>{project.descripcion}</p>
      {project.videoUrl && (
        <div className="video-container">
          <iframe src={project.videoUrl} title="Video del proyecto" allowFullScreen></iframe>
        </div>
      )}
      <div className="galeria">
        {project.galeria?.map((img, i) => (
          <img key={i} src={img} alt={`Imagen ${i + 1}`} />
        ))}
      </div>

      <Link to='/proyectos'>Volver</Link>
    </div>
  );
};

export default ProjectDetail;



