import React from "react";
import Contact from "./Contact";
const home = () => {
  return (
    <div>
      <p className="font-inter-bold text-4xl text-center m-12">
        HOLA ,SOY WILBERT CHAN UC
      </p>
      <p className="font-inter text-2xl text-center m-10">
        Un desarrollador web apasionado por crear experiencias interactivas y
        funcionales.
        <br /> Diseño y desarrollo sitios web orientados a resultados, ayudando
        a transformar ideas
        <br /> en productos digitales exitosos.
      </p>

      {/* incluimos dos botones aca okey  */}
      <div>
        <div className="flex justify-center gap-4 m-8">
          <div>
            <a
              className="bg-purple-500 hover:bg-purple-700 transition text-white py-2 px-10 rounded inline-block text-center"
              href="#contacto"
            >
              Contacto
            </a>
          </div>
          <div>
            <a
              className="bg-purple-500 hover:bg-purple-700 transition text-white py-2 px-10 rounded inline-block text-center"
              href="/CV_WilbertChan_Desarrollador_2025.pdf"
              download
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
