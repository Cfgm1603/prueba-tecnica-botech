import React from "react";
import Notification from "../components/Notification";
import Navpanel from "../components/Navpanel";
import Solicitud from "../components/Solicitud";
import img from "../images/logo.png";

function Panel() {
  const closeNav = () => {
      document.getElementById("mySidenav").style.width = "0";
  };

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px"; 
  };
  return (
    <div>
    <Navpanel/>
      <div className="container-page">
        <div className="">
        <div id="mySidenav" class="sidenav">
          <a id="close" href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
          <a href="#">Solicitar transporte <br></br> escolar</a>
          <a href="#">Tutoriales</a>
          <a href="#">Pagos</a>
          <a id="last" href="#">Información Legal</a>
          <div id="space-navbar"></div>
          <img id="imageDinamic" src={img} alt="logo" />
        </div>
        
        </div>
        
          
        
        <span id="boton-navpanel" onClick={openNav}>&larr;Abrir navegación del Panel</span>
        
        <div className="component-panel">
        <Solicitud/>
        </div>

        
      </div>
    </div>
  );
}
export default Panel;
