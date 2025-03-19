import React from "react";
import NavbarIzquierdo from "../layout/navbarizquierdo";

const Home = () => {
  return (
    <div className="container m-8 border rounded">
      {/* importamos nuestro navbar */}
      <NavbarIzquierdo />
      <div style={{ marginLeft: "60px", paddingTop: "20px" }}>
        <p className="h1  text-center ">
          HELLO, MY NAME IS WILBERT OLIVER CHAN UC
        </p>
        <p className=" text-center font-openSans text-base">
          I am a web developer passionate about creating interactive and
          functional experiences that add value to users. My focus is on
          designing and developing websites that are result-oriented, with a
          particular emphasis on usability and performance optimization.
          <br />
          Throughout my career, I have worked with various technologies and
          tools to create attractive and efficient digital products. My goal is
          to help transform ideas into successful digital products, maximizing
          the impact of each project through a user-centered approach and
          innovative solutions.
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col text-center">
          <button className="btn btn-primary mx-1 w-50 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            CONTACTO
          </button>
        </div>
        <div className="col">
          <button className="btn btn-primary mx-1 w-50 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            PROYECTOS
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
