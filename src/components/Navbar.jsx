import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img from "../images/logo.png";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 767px)").matches
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 1050px)").matches);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      <div className="header">
        <Link to="/">
          {" "}
          <img src={img} alt="logo" />
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
            />
          </svg>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="/soluciones">Soluciones</Link>
        </li>
        <li>
          <Link to="/colegios">Colegios</Link>
        </li>
        <li>
          <Link to="/compania">Compañía</Link>
        </li>
        <li>
          {isMobile ? (
            <>
              <a className="account">
                <LoginButton className={menuOpen ? "" : "log"} />
              </a>
            </>
          ) : (
            <>
              <LoginButton className={menuOpen ? "" : "log"} />
            </>
          )}
        </li>
        <li>
          <button id="btnVentas" className="log">
            <Link to="/ventas"> Comunícate con ventas</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
