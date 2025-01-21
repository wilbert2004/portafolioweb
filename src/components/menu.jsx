import React from "react";
import imgperfil from "../image/PERFIL.jpg";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="profile-section">
        <img src={imgperfil} alt="fotoperfil" className="circle" />
        <h3 className="font-inter-bold">WILBERT OLIVER CHAN</h3>
      </div>
      <nav className="nav-section">
        <ul className="menu-list">
          <li>
            <a href="#home" className="font-inter-bold">
              HOME
            </a>
          </li>
          <li>
            <a href="#acerca" className="font-inter-bold">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#Contact" className="font-inter-bold">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
