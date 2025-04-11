import AdminForm from "../../components/AdminForm";
import HeroSectionVidComponent from "../../components/HeroSectionVid";
import ProjectList from "../../components/ProjectList";
import "../../css/pages/AdminDashboard.css";
import video from "../../../public/videos/home-hero.mp4";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AdminDashboard = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const navigate = useNavigate();

  const fetchProjects = () => {
    setRefreshKey(prev => prev + 1);
  };

  const clearSelectedProject = () => {
    setSelectedProject(null);
  };
  const handleLogout=() => {
    localStorage.removeItem("token");
    navigate("/admin");
  }
  return (
    <>
      <HeroSectionVidComponent video={video} />
      <div>
        <h1 className="admin-title">Panel de Administración Taller Hinojosa</h1>
        <button onClick={handleLogout} className="logout-btn">
            Cerrar sesión
          </button>
        <AdminForm
          selectedProject={selectedProject}
          clearSelectedProject={clearSelectedProject}
          fetchProjects={fetchProjects}
        />
        <ProjectList
          setSelectedProject={setSelectedProject}
          fetchProjects={fetchProjects}
          key={refreshKey}
        />
      </div>
    </>
  );
};

export default AdminDashboard;
