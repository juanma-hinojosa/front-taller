// src/pages/admin/AdminLogin.jsx
import { useState } from "react";
import "../../css/pages/adminlogin.css";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("juanma.hinojosa97@gmail.com");
  const [password, setPassword] = useState("hinojosa97");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://backendtaller.onrender.com/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      console.log("Respuesta del backend:", res);
      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        navigate("/admin/dashboard");
      } else {
        setError(data.message || "Error al iniciar sesión");
      }
    } catch (err) {
      console.error("Error al conectar con el backend", err);
      setError("Error del servidor");
    }
  };

  return (
    <div className="admin-login">
      <h2>Iniciar sesión como Administrador</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Iniciar Sesión</button>

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
