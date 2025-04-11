// src/pages/admin/ProyectoForm.jsx
// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
import HeroSectionVidComponent from "../../components/HeroSectionVid";
import "../../css/pages/ProyectoForm.css";
import HomeHeroVid from "../../../public/videos/home-hero.mp4";
import { useState } from "react";

const ProyectoForm = () => {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    resumen: "",
    descripcion: "",
    videoUrl: "",
  });
  const [portada, setPortada] = useState(null);
  const [galeria, setGaleria] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => data.append(key, value));
    if (portada) data.append("portada", portada);
    galeria.forEach((img) => data.append("galeria", img));
    // const token = localStorage.getItem("token");
    const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZjUzMmYwOWQwNjEwM2E3MWRiOTVjZiIsImlhdCI6MTc0NDE1MzUwMCwiZXhwIjoxNzQ0MjM5OTAwfQ.giW9v6TaawFJZg7WaGkqZCeB-UMbyCD40_zjCdJoPiM";
  
    try {
      const res = await fetch("https://backendtaller.onrender.com/api/projects", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // 👈 importante para rutas protegidas
        },
        body: data,
      });

      if (res.ok) {
        alert("Proyecto creado correctamente");
        setForm({
          title: "",
          slug: "",
          resumen: "",
          descripcion: "",
          videoUrl: "",
        });
        setPortada(null);
        setGaleria([]);
      } else {
        alert("Error al crear el proyecto");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <HeroSectionVidComponent video={HomeHeroVid} />
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

        <button type="submit">Guardar Proyecto</button>
      </form>
    </>
  );
};

export default ProyectoForm;
