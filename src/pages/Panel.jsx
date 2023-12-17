import React from "react";
import Notification from "../components/Notification";
import Navvertical from "../components/Navvertical";
import Solicitud from "../components/Solicitud";

function Panel() {
  const closeNav = () => {
      document.getElementById("mySidenav").style.width = "0";
  };

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px"; 
  };
  return (
    <div>
      <div className="container-page">
        <div className="container-page-left">
        <div id="mySidenav" class="sidenav">
          <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
        </div>
        <div className="container-page-right">
          <Solicitud/>
        </div>
        <span onClick={openNav}>&#9776; open</span>
      </div>
    </div>
  );
}
export default Panel;
