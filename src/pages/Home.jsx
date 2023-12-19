import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/CarouselH";
import img from "../images/Duena.jpeg";

function Home() {
  return (
    <div >
      <Navbar />
      <Carousel />
      <br></br>
      <br></br>
      <div className="container-page">
        <div className="contains" >
          <div className="textHome">
          <br></br>
            <h3>TEHC SAS, revolucionando el transporte escolar desde 1983</h3>
            <br></br>
            <p>
              La respuesta integral para colegios y empresas. <br></br>
              <br></br>
              <p class="animate-charcter">!Descubre nuestra revolución en movilidad educativa y corporativa!</p>
              
            </p>
          </div>
          <div style={{width:"50%", height: "100%"}}>
            <img src={img} className="imgIndividual"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
