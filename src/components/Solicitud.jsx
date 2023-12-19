import NuevoPasajero from "./NuevoPasajero";
import { useState } from "react";

const Solicitud = () => {
    const [colegio, setColegio] = useState("Colegio 1");
  const [periodo, setPeriodo] = useState("2024-1");

  return (
    <div id="Solicitud"  style={{display: "grid"}}>
      <div className="title-block">
        <h3 id="title">Solicitud de transporte escolar</h3>
      </div>
      <div id="insideForms">
        <form>
          <div className="container-form">
            <div className="format colegio">
              <h4>Colegio </h4>
              <label>
                <div className="custom-select">
                  <select onChange={(event) => setColegio(event.target.value)}>
                    <option value="Colegio 1">Colegio 1</option>
                    <option value="Colegio 2">Colegio 2</option>
                    <option value="Colegio 3">Colegio 3</option>
                  </select>
                </div>
              </label>
            </div>
            <div className="format periodo-escolar">
              <h4 style={{ whiteSpace: "nowrap" }}>Periodo escolar </h4>
              <label>
                <div className="custom-select">
                  <select
                    onChange={(event) => setPeriodo(event.target.value)}
                    defaultValue={"2024-1"}
                  >
                    <option value="2024-1">2024-1</option>
                    <option value="2024-2">2024-2</option>
                  </select>
                </div>
              </label>
            </div>
          </div>
        </form>
      </div>
      <NuevoPasajero/>
      <NuevoPasajero/>
      

      <div id="add">
        <h3 id="title">Añadir pasajero</h3>
      </div>
    </div>
  );
};
export default Solicitud;
