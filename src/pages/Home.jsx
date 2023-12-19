import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/CarouselH";


function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="container-page">
        <div>
             
              <h3>TEHC SAS, revolucionando el transporte escolar desde 1983</h3>

              <p>La respuesta integral para colegios y empresas, !Descubre nuestra revolución en movilidad educativa y corporativa</p>
        </div>
        
        
      </div>
    </>
  );
}

export default Home;
