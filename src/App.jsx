import React from "react";
import "./styles.css";
import Home from "./components/Home";
import Acerca from "./components/Acerca";
import Contact from "./components/Contact";
import Menu from "./components/menu";

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
        <div id="acerca" className="ventanila">
          <Acerca />
        </div>
        <div id="Contact" className="ventanila">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
