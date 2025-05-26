import React from "react";
import Cards from "./Cards";

const Proyect = () => {
  return (
    <div>
      <p className="font-inter-bold text-4xl text-center m-3">PROYECTOS</p>

      <p className="font-inter text-2xl text-center m-10">
        De sitios simples a apps complejas, estos son mis proyectos favoritos.
      </p>

      <div>
        {/* agregamos los cards aqui para nuestro proyectos realizados  */}
        <div className="flex justify-center">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Proyect;
