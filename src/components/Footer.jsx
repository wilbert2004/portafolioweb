import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-8 pb-4 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Info */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">WILBERT CHAN UC</h2>
          <p className="max-w-md text-sm">
            Un desarrollador web centrado en el frontend que crea el frontend de
            sitios web y aplicaciones web que conducen al éxito del producto en
            general.
          </p>
        </div>
        {/* Social */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-center md:text-left">
            SOCIAL
          </h2>
          <div className="flex gap-6 text-2xl justify-center md:justify-start">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="mailto:tucorreo@gmail.com"
              className="hover:text-purple-400 transition"
            >
              <SiGmail />
            </a>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-600" />
      <p className="text-center text-sm">
        &copy; Copyright 2025. Creado por Wilbert Chan
      </p>
    </footer>
  );
};

export default Footer;
