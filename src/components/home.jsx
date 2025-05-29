import React from "react";
const home = () => {
  return (
    <div>
      <p className="font-inter-bold text-4xl text-center m-12">
        HOLA ,SOY WILBERT CHAN UC
      </p>
      <p className="font-inter text-2xl text-center m-10">
        Soy Wilbert Chan, estudiante de Ingeniería en Sistemas apasionado por el
        desarrollo frontend con React. <br /> Me gusta construir experiencias
        interactivas, limpias y funcionales. Tengo experiencia desarrollando
        software desde cero, <br />
        integrando bases de datos, API REST, autenticación y diseño responsive.
        Estoy buscando mi primera oportunidad laboral <br /> como desarrollador
        web junior, donde pueda seguir creciendo y aportar mis habilidades
      </p>

      {/* incluimos dos botones aca okey  */}
      <div>
        <div className="flex justify-center gap-4 m-8">
          <div>
            <a
              className="bg-purple-500 hover:bg-purple-700 transition text-white py-2 px-10 rounded inline-block text-center"
              href="mailto:olitouc@gmail.com?subject=Oportunidad%20de%20Desarrollador%20Web%20Junior"
            >
              Contactame
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
