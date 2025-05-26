import React from "react";
import "./styles.css";
import Home from "./components/home";
import Acerca from "./components/Acerca";
import Contact from "./components/Contact";
import Menu from "./components/menu";
//importampos proyect
import Proyect from "./components/Proyect";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App ">
      <div>
        <Menu />
      </div>

      <div>
        <div id="home" className="ventanila">
          <Home />
        </div>
        <br />
        <div id="proyectos" className="ventanila">
          <Proyect />
        </div>
        <br />
        <div id="acerca" className="ventanila">
          <Acerca />
        </div>
        <br />
        <div id="Contact" className="ventanila">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
