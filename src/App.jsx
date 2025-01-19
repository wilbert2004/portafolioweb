import React from "react";
import Acercade from "./components/acercade";
import Home from "./components/home";
import Contacto from "./components/contacto";
import Menu from "./components/menu";
import "./styles.css";
function App() {
  return (
    <div className="fondo">
      <Menu />
      <section
        id="home"
        style={{ height: "100vh", backgroundColor: "#f0f8ff" }}
      >
        <Home />
      </section>
      <section
        id="acercade"
        style={{ height: "100vh", backgroundColor: "#ffe4e1" }}
      >
        <Acercade />
      </section>
      <section
        id="contacto"
        style={{ height: "100vh", backgroundColor: "#e6e6fa" }}
      >
        <Contacto />
      </section>
    </div>
  );
}

export default App;
