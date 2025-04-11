import { useEffect, useState } from "react";
import "../css/AdminForm.css";

const AdminForm = ({
  selectedProject,
  clearSelectedProject,
  fetchProjects,
}) => {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    resumen: "",
    descripcion: "",
    videoUrl: "",
  });
  const [portada, setPortada] = useState(null);
  const [galeria, setGaleria] = useState([]);

  // 🟡 Cuando cambia el proyecto seleccionado, llenamos el formulario
  useEffect(() => {
    if (selectedProject) {
      setForm({
        title: selectedProject.title || "",
        slug: selectedProject.slug || "",
        resumen: selectedProject.resumen || "",
        descripcion: selectedProject.descripcion || "",
        videoUrl: selectedProject.videoUrl || "",
      });
      setPortada(null);
      setGaleria([]);
    }
  }, [selectedProject]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => data.append(key, value));
    if (portada) data.append("portada", portada);
    galeria.forEach((img) => data.append("galeria", img));

    try {
      const url = selectedProject
        ? `https://backendtaller.onrender.com/api/projects/${selectedProject._id}`
        : "https://backendtaller.onrender.com/api/projects";

      const method = selectedProject ? "PUT" : "POST";
      const token = localStorage.getItem("token");
      // const token =
      //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZjUzMmYwOWQwNjEwM2E3MWRiOTVjZiIsImlhdCI6MTc0NDE1MzUwMCwiZXhwIjoxNzQ0MjM5OTAwfQ.giW9v6TaawFJZg7WaGkqZCeB-UMbyCD40_zjCdJoPiM";

      console.log("Token enviado:", token);

      const res = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`, // 👈 TOKEN ENVIADO
        },
        body: data,
      });

      if (res.ok) {
        alert(selectedProject ? "Proyecto actualizado" : "Proyecto creado");
        setForm({
          title: "",
          slug: "",
          resumen: "",
          descripcion: "",
          videoUrl: "",
        });
        setPortada(null);
        setGaleria([]);
        clearSelectedProject();
        fetchProjects();
      } else {
        alert("Error al guardar el proyecto");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="admin-form">
      <input
        type="text"
        name="title"
        placeholder="Título"
        value={form.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="slug"
        placeholder="Slug (ej: auto-rojo-2024)"
        value={form.slug}
        onChange={handleChange}
        required
      />
      <textarea
        name="resumen"
        placeholder="Resumen"
        value={form.resumen}
        onChange={handleChange}
      />
      <textarea
        name="descripcion"
        placeholder="Descripción"
        value={form.descripcion}
        onChange={handleChange}
      />
      <input
        type="text"
        name="videoUrl"
        placeholder="URL del video (opcional)"
        value={form.videoUrl}
        onChange={handleChange}
      />

      <label>Portada:</label>
      <input
        type="file"
        onChange={(e) => setPortada(e.target.files[0])}
        accept="image/*"
      />

      <label>Galería (múltiples imágenes):</label>
      <input
        type="file"
        multiple
        onChange={(e) => setGaleria(Array.from(e.target.files))}
        accept="image/*"
      />

      <button type="submit">
        {selectedProject ? "Actualizar Proyecto" : "Guardar Proyecto"}
      </button>

      {selectedProject && (
        <button
          type="button"
          onClick={clearSelectedProject}
          className="cancel-btn"
        >
          Cancelar edición
        </button>
      )}
    </form>
  );
};

export default AdminForm;
