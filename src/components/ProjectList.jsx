import { useEffect, useState } from "react";
import "../css/ProjectList.css";

const ProjectList = ({ setSelectedProject, fetchProjects }) => {
  const [projects, setProjects] = useState([]);

  // ✅ Usamos fetch interno solo si no se pasó como prop
  const fetchProjectsInternal = async () => {
    try {
      const res = await fetch("https://backendtaller.onrender.com/api/projects");
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error("Error al obtener proyectos:", error);
    }
  };

  useEffect(() => {
    // Si te pasaron fetchProjects por props, usalo para forzar refresh desde AdminPanel
    fetchProjectsInternal();
  }, [fetchProjects]);

  const deleteProject = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar este proyecto?")) return;
    const token = localStorage.getItem("token"); // 👈 Obtener el token
    try {
      const res = await fetch(`https://backendtaller.onrender.com/api/projects/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`, // 👈 Enviar el token
        },
      });
      if (res.ok) {
        setProjects((prev) => prev.filter((proj) => proj._id !== id));
      } else {
        alert("Error al eliminar el proyecto.");
      }
    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  };

  return (
    <div className="project-list">
      <h2>Proyectos creados</h2>
      {projects.length === 0 && <p>No hay proyectos aún.</p>}
      <ul>
        {projects.map((proj) => (
          <li key={proj._id} className="project-item">
            {/* <img src={`http://localhost:4000/${proj.portada}`} alt={proj.title} /> */}
            <img src={proj.portada} alt={proj.title} />
            <div>
              <h3>{proj.title}</h3>
              <p>{proj.resumen}</p>
              <button className="delete-btn" onClick={() => deleteProject(proj._id)}>
                Eliminar
              </button>
              <button className="edit-btn" onClick={() => setSelectedProject(proj)}>
                Editar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
