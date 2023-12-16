import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <Dropdown autoClose="outside">
        <Dropdown.Toggle className="log">
          Perfil
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item> <Link to="/panel" id="special">Panel</Link> </Dropdown.Item>
          <Dropdown.Item onClick={() => { logout(); }}>Cerrar sesión</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  );
};

export default LogoutButton;
