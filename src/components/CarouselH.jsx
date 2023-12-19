import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import imgBus from "../images/Buses.png";
import imgAsientos from "../images/Asientos.jpeg";
import imgDuena from "../images/Duena.png";

function CarouselH() {
  return (
    <div style={{ display: "block", width: "100%" }}>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block"
            src={imgBus}
            alt="Image One"
            id="imgCarousel"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block"
            src={imgAsientos}
            alt="Image Two"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block"
            src={imgDuena}
            alt="Image Three"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselH;
