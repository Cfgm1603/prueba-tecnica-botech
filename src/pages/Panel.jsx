import React from "react";
import Notification from "../components/Notification";
import Navvertical from "../components/Navvertical";

function Panel() {
  return (
    <div>
      <div className="container-page">
        <div className="container-page-left">
          <Navvertical />
        </div>

        
        <div className="container-page-right">
          <div className="title-block">
            <h3 id="title">Solicitud de transporte escolar</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Panel;
