import React from "react";
import Notification from "../components/Notification";
import Navpanel from "../components/Navpanel";
import Solicitud from "../components/Solicitud";
import img from "../images/logo.png";
import Tutoriales from "../components/Tutoriales";
import Pagos from "../components/Pagos";
import Legal from "../components/Legal";

function Panel() {
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  const component_tutoriales = () => {
    document.getElementById("Solicitud").style.display = "none";
    document.getElementById("Legal").style.display = "none";
    document.getElementById("Pagos").style.display = "none";
    document.getElementById("Tutoriales").style.display = "block";
  };

  const component_solicitud = () => {
    document.getElementById("Solicitud").style.display = "block";
    document.getElementById("Legal").style.display = "none";
    document.getElementById("Pagos").style.display = "none";
    document.getElementById("Tutoriales").style.display = "none";
  };

  const component_pagos = () => {
    document.getElementById("Solicitud").style.display = "none";
    document.getElementById("Legal").style.display = "none";
    document.getElementById("Pagos").style.display = "block";
    document.getElementById("Tutoriales").style.display = "none";
  };

  const component_legal = () => {
    document.getElementById("Solicitud").style.display = "none";
    document.getElementById("Legal").style.display = "block";
    document.getElementById("Pagos").style.display = "none";
    document.getElementById("Tutoriales").style.display = "none";
  };
  return (
    <div>
      <Navpanel />
      <div className="container-page">
        <div className="">
          <div id="mySidenav" class="sidenav">
            <a
              id="close"
              href="javascript:void(0)"
              class="closebtn"
              onClick={closeNav}
            >
              &times;
            </a>
            <a onClick={component_solicitud}>
              Solicitar transporte <br></br> escolar
            </a>
            <a onClick={component_tutoriales}>Tutoriales</a>
            <a onClick={component_pagos}>Pagos</a>
            <a id="last" onClick={component_legal}>
              Información Legal
            </a>
            <div id="space-navbar"></div>
            <img id="imageDinamic" src={img} alt="logo" />
          </div>
        </div>

        <span id="boton-navpanel" onClick={openNav}>
          &larr;Abrir navegación del Panel
        </span>

        <div className="component-panel">
          <Solicitud />
          <Tutoriales />
          <Pagos />
          <Legal />
        </div>
      </div>
    </div>
  );
}
export default Panel;
