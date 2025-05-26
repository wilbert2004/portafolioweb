import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaPython,
  FaDatabase,
  FaReact,
  FaGithub,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";

import { SiMysql, SiPostgresql } from "react-icons/si";

const Acerca = () => {
  return (
    <div>
      <p className="font-inter-bold text-4xl text-center m-3">ACERCA DE MI</p>
      <p className="text-2xl text-center m-10">
        Aquí descubrirás quién soy, lo que hago y las habilidades que he
        desarrollado en el
        <br /> ámbito de la programación y la tecnología.
      </p>

      {/* nuestro row  */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-10 w-full max-w-5xl">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-3xl font-bold mb-8 text-center">¡Conóceme!</h2>
            <p className="text-gray-600 m-2">
              Soy estudiante de Ingeniería en Sistemas Computacionales, con
              interés en el desarrollo web front-end. <br /> Me dedico a crear
              interfaces funcionales y bien diseñadas para sitios y aplicaciones
              web, siempre buscando aportar valor a cada proyecto. <br />
              Trabajo en mejorar mis habilidades, aprender nuevas tecnologías y
              colaborar en proyectos que me permitan crecer personal y
              profesionalmente.
              <br />
              Estoy abierto a oportunidades para seguir desarrollándome en este
              campo.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow ">
            <h2 className="text-3xl font-bold text-center mb-8">Habilidades</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center m-4">
              {/* Card de habilidad */}
              <div className="flex flex-col items-center bg-pink-500 w-20 h-24 rounded p-2 text-white justify-center transition-all duration-200 hover:bg-pink-700 cursor-pointer">
                <FaHtml5 size={32} />
                <span className="w-full text-center text-xs font-semibold flex-1 flex items-center justify-center h-full">
                  HTML
                </span>
              </div>
              <div className="flex flex-col items-center bg-pink-500 w-20 h-24 rounded p-2 text-white justify-center transition-all duration-200 hover:bg-pink-700 cursor-pointer">
                <FaCss3Alt size={32} />
                <span className="w-full text-center text-xs font-semibold flex-1 flex items-center justify-center h-full">
                  CSS
                </span>
              </div>
              <div className="flex flex-col items-center bg-pink-500 w-20 h-24 rounded p-2 text-white justify-center transition-all duration-200 hover:bg-pink-700 cursor-pointer">
                <FaJava size={32} />
                <span className="w-full text-center text-xs font-semibold flex-1 flex items-center justify-center h-full">
                  JAVA
                </span>
              </div>
              <div className="flex flex-col items-center bg-pink-500 w-20 h-24 rounded p-2 text-white justify-center transition-all duration-200 hover:bg-pink-700 cursor-pointer">
                <FaPython size={32} />
                <span className="w-full text-center text-xs font-semibold flex-1 flex items-center justify-center h-full">
                  PYTHON
                </span>
              </div>
              <div className="flex flex-col items-center bg-pink-500 w-20 h-24 rounded p-2 text-white justify-center transition-all duration-200 hover:bg-pink-700 cursor-pointer">
                <SiMysql size={32} />
                <span className="w-full text-center text-xs font-semibold flex-1 flex items-center justify-center h-full">
                  MYSQL
                </span>
              </div>
              <div className="flex flex-col items-center bg-pink-500 w-20 h-24 rounded p-2 text-white justify-center transition-all duration-200 hover:bg-pink-700 cursor-pointer">
                <IoLogoJavascript size={32} />
                <span className="w-full text-center text-xs font-semibold flex-1 flex items-center justify-center h-full">
                  JAVASCRIPT
                </span>
              </div>
              <div className="flex flex-col items-center bg-pink-500 w-20 h-24 rounded p-2 text-white justify-center transition-all duration-200 hover:bg-pink-700 cursor-pointer">
                <FaGithub size={32} />
                <span className="w-full text-center text-xs font-semibold flex-1 flex items-center justify-center h-full">
                  GITHUB
                </span>
              </div>
              <div className="flex flex-col items-center bg-pink-500 w-20 h-24 rounded p-2 text-white justify-center transition-all duration-200 hover:bg-pink-700 cursor-pointer">
                <FaReact size={32} />
                <span className="w-full text-center text-xs font-semibold flex-1 flex items-center justify-center h-full">
                  REACT JS
                </span>
              </div>
              <div className="flex flex-col items-center bg-pink-500 w-20 h-24 rounded p-2 text-white justify-center transition-all duration-200 hover:bg-pink-700 cursor-pointer">
                <FaNodeJs size={32} />
                <span className="w-full text-center text-xs font-semibold flex-1 flex items-center justify-center h-full">
                  NODE.JS
                </span>
              </div>
              <div className="flex flex-col items-center bg-pink-500 w-20 h-24 rounded p-2 text-white justify-center transition-all duration-200 hover:bg-pink-700 cursor-pointer">
                <SiPostgresql size={32} />
                <span className="w-full text-center text-xs font-semibold flex-1 flex items-center justify-center h-full">
                  POSTGRESQL
                </span>
              </div>
              <div className="flex flex-col items-center bg-pink-500 w-20 h-24 rounded p-2 text-white justify-center transition-all duration-200 hover:bg-pink-700 cursor-pointer">
                <FaBootstrap size={32} />
                <span className="w-full text-center text-xs font-semibold flex-1 flex items-center justify-center h-full">
                  BOOTSTRAP
                </span>
              </div>
              <div className="flex flex-col items-center bg-pink-500 w-20 h-24 rounded p-2 text-white justify-center transition-all duration-200 hover:bg-pink-700 cursor-pointer">
                <IoLogoFirebase size={32} />
                <span className="w-full text-center text-xs font-semibold flex-1 flex items-center justify-center h-full">
                  FIREBASE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acerca;
