import React from "react";

const Acerca = () => {
  return (
    <div className="container m-8 border rounded">
      <h1 className="font-inter-bold text-4xl text-center m-3">ACERCA DE MI</h1>
      <p className="font-inter-regular text-lg text-center m-3">
        Aquí descubrirás quién soy, lo que hago y las habilidades que he
        desarrollado en el ámbito de la programación y la tecnología.
      </p>

      <div className="row text-center">
        <div className="col">
          <p className="h-3  text-center">CONOCEME!</p>
          <div
            className="font-inter-regular text-lg text-justify m-3 rounded"
            style={{
              width: "100%",
              height: "100%",
              padding: "20px",
            }}
          >
            Soy estudiante de Ingeniería en Sistemas Computacionales, con
            interés en el desarrollo web front-end.
            <br />
            Me dedico a crear interfaces funcionales y bien diseñadas para
            sitios y aplicaciones web, siempre buscando aportar valor a cada
            proyecto. Trabajo en mejorar mis habilidades, aprender nuevas
            tecnologías y colaborar en proyectos que me permitan crecer personal
            y profesionalmente.
            <br />
            Estoy abierto a oportunidades para seguir desarrollándome en este
            campo.
          </div>
        </div>
        <div className="h3  text-center col">MIS HABILIDADES!</div>
      </div>
    </div>
  );
};

export default Acerca;
