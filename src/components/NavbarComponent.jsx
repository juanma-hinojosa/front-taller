import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/NavbarComponent.css";

function NavbarComponent() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <div className="logo">TuLogo</div>

        {/* Ícono hamburguesa o X */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </div>

        {/* Links de navegación */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>Inicio</NavLink>
          <NavLink to="/servicios" onClick={closeMenu}>Servicios</NavLink>
          <NavLink to="/proyectos" onClick={closeMenu}>Proyectos</NavLink>
          <NavLink to="/nosotros" onClick={closeMenu}>Nosotros</NavLink>
          <NavLink to="/contacto" onClick={closeMenu}>Contacto</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default NavbarComponent;
