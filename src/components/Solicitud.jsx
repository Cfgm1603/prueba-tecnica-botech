import NuevoPasajero from "./NuevoPasajero";
import { useState } from "react";

const Solicitud = () => {
  const [colegio, setColegio] = useState("Colegio 1");
  const [periodo, setPeriodo] = useState("2024-1");
  const [pasajeros, setPasajeros] = useState([]);

  const handleAddPasajero = () => {
    // Agrega un nuevo pasajero a la lista
    setPasajeros([...pasajeros, {}]); // Puedes inicializar el pasajero con valores predeterminados según sea necesario
  };

  const handleRecogerDatos = (numeroPasajero, datosPasajero) => {
    // Actualiza los datos del pasajero en la lista
    const updatedPasajeros = [...pasajeros];
    updatedPasajeros[numeroPasajero - 1] = datosPasajero;
    setPasajeros(updatedPasajeros);
    };

    const alerta = () => {
      // Actualiza los datos del pasajero en la lista
      console.log(pasajeros, colegio, periodo)
      alert("Revisa la consola, ahi se enviaron los datos de la solicitud de transporte")
      };
    

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
      {pasajeros.map((pasajero, index) => (
        <NuevoPasajero key={index}  numeroPasajero={index + 1} onRecogerDatos={handleRecogerDatos}/>
      ))}
      
      <div id="add" onClick={handleAddPasajero}>
        <h3 id="title">Añadir pasajero</h3>
      </div>
      
      <div id="add" onClick={handleRecogerDatos}>
        Recoger datos de los pasajeros
      </div>
      <div id="add" style={{backgroundColor:"#077e01", color: "white"}} onClick={alerta} >
        Ver los datos de los pasajeros
      </div>
    </div>
  );
};
export default Solicitud;
