import React from "react";
import { useState } from "react";

const NuevoPasajero = ({ numeroPasajero, onRecogerDatos })=> {
  const [apellido, setApellido] = useState("");
  const [nombre, setNombre] = useState("");
  const [DireccionAM, setDireccionAM] = useState("");
  const [barrioAM, setBarrioAM] = useState("");
  const [direccionPM, setDireccionPM] = useState("");
  const [barrioPM, setBarrioPM] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    const sanitizedValue = value.replace(/[^\w\s]|[0-9]/gi, "");
    setError(value !== sanitizedValue);
  };

  const handleKeyDown = (event) => {
    const allowedKeys = /^[a-zA-Z\s]*$/; // Allow only letters and spaces
    if (!allowedKeys.test(event.key)) {
      event.preventDefault();
      setError(true);
    }
  };

  const handleRecogerDatos = () => {
    // Recolecta los datos del pasajero
    const datosPasajero = {
      apellido,
      nombre,
      DireccionAM,
      barrioAM,
      direccionPM,
      barrioPM
    };

    onRecogerDatos(numeroPasajero, datosPasajero);

  };


  return (
    <>
      <div className="title-block">
        <h3 id="title">Datos pasajero {numeroPasajero}</h3>
      </div>
      <div className="passenger">
        <div id="insider">
          <form>
            <div className="top">
              <div className="container-form">
                <div className="format colegio">
                  <h4>Apellidos </h4>
                  <label>
                    <div className="custom-select">
                      <input
                        type="text"
                        value={apellido}
                        onChange={(e) => {
                          handleChange(e);
                          setApellido(e.target.value);
                        }}
                        onKeyDown={(e) => handleKeyDown(e)}
                      />
                    </div>
                  </label>
                </div>
                <div className="format periodo-escolar">
                  <h4 style={{ whiteSpace: "nowrap" }}>Nombres</h4>
                  <label>
                    <div className="custom-select">
                      <input
                        type="text"
                        value={nombre}
                        onChange={(e) => {
                          handleChange(e);
                          setNombre(e.target.value);
                        }}
                        onKeyDown={(e) => handleKeyDown(e)}
                      />
                    </div>
                  </label>
                </div>
              </div>
              <div className="alert">
                {error && (
                  <span style={{ color: "red" }}>
                    <h4> No se permiten números ni caracteres especiales. </h4>
                  </span>
                )}
              </div>
            </div>
            <div className="bottom">
              <hr></hr>
              <div className="container-form">
                <div className="format colegio">
                  <h4 style={{ whiteSpace: "nowrap" }}>Dirección AM </h4>
                  <label>
                    <div className="custom-select">
                      <input
                        style={{ width: "22.4vw" }}
                        type="text"
                        value={DireccionAM}
                        onChange={(e) => setDireccionAM(e.target.value)}
                      />
                    </div>
                  </label>
                </div>
                <div className="format periodo-escolar">
                  <h4 style={{ whiteSpace: "nowrap" }}>Barrio</h4>
                  <label>
                    <div className="custom-select">
                      <input
                        style={{ marginLeft: "2.1vw" }}
                        type="text"
                        value={barrioAM}
                        onChange={(e) => setBarrioAM(e.target.value)}
                      />
                    </div>
                  </label>
                </div>
              </div>
              <br></br>
              <div className="pickerRadio">
                <div>
                  <h4 style={{ whiteSpace: "nowrap", marginTop: "1%" }}>
                    Tipo de vivienda
                  </h4>
                </div>
                <div className="radioPick">
                  <label className="radioLabel">
                    Casa&nbsp;&nbsp;
                    <input type="radio" name="myRadio" value="Casa" />
                  </label>
                  <h2 style={{ whiteSpace: "nowrap", paddingBottom: "7%" }}>
                    |
                  </h2>
                  <label className="radioLabel">
                    Apartamento&nbsp;&nbsp;
                    <input type="radio" name="myRadio" value="Apartamento" />
                  </label>
                </div>
              </div>
            </div>
            <div className="bottom">
              <hr></hr>
              <div className="container-form">
                <div className="format colegio">
                  <h4 style={{ whiteSpace: "nowrap" }}>Dirección PM </h4>
                  <label>
                    <div className="custom-select">
                      <input
                        style={{ width: "22.4vw" }}
                        type="text"
                        value={direccionPM}
                        onChange={(e) => setDireccionPM(e.target.value)}
                      />
                    </div>
                  </label>
                </div>
                <div className="format periodo-escolar">
                  <h4 style={{ whiteSpace: "nowrap" }}>Barrio</h4>
                  <label>
                    <div className="custom-select">
                      <input
                        style={{ marginLeft: "2.1vw" }}
                        type="text"
                        value={barrioPM}
                        onChange={(e) => {setBarrioPM(e.target.value); handleRecogerDatos();}}
                      />
                    </div>
                  </label>
                </div>
              </div>
              <br></br>
              <div className="pickerRadio">
                <div>
                  <h4 style={{ whiteSpace: "nowrap", marginTop: "1%" }}>
                    Tipo de vivienda
                  </h4>
                </div>
                <div className="radioPick">
                  <label className="radioLabel">
                    Casa&nbsp;&nbsp;
                    <input type="radio" name="myRadio" value="Casa" />
                  </label>
                  <h2 style={{ whiteSpace: "nowrap", paddingBottom: "7%" }}>
                    |
                  </h2>
                  <label className="radioLabel">
                    Apartamento&nbsp;&nbsp;
                    <input type="radio" name="myRadio" value="Apartamento" />
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default NuevoPasajero;
