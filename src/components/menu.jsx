import React from "react";
import { Link } from "react-scroll";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="acercade" smooth={true} duration={500}>
            Acerca de
          </Link>
        </li>
        <li>
          <Link to="contacto" smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
