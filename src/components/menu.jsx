import React, { useState } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import imgperfil from "../image/PERFIL.jpg"; // Asegúrate de que la ruta es correcta

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        {/* Foto de Perfil + Nombre (Más Grande y Visible) */}
        <div className="profile-header">
          <img src={imgperfil} alt="Wilbert Chan" className="profile-pic" />
          <h1 className="profile-name">WILBERT OLIVER CHAN</h1>
        </div>

        {/* Menú Hamburguesa (Ícono Grande) */}
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>

        {/* Menú de Navegación */}
        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#home" onClick={() => setIsOpen(false)}>
                INICIO
              </a>
            </li>
            <li>
              <a href="#proyectos" onClick={() => setIsOpen(false)}>
                PROYECTOS
              </a>
            </li>
            <li>
              <a href="#acerca" onClick={() => setIsOpen(false)}>
                SOBRE MÍ
              </a>
            </li>
            <li>
              <a href="#contacto" onClick={() => setIsOpen(false)} id="contact">
                CONTACTO
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Menu;
