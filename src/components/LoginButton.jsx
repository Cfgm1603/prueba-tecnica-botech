import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => { 
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button className="log" onClick={() => loginWithRedirect()}>Mi cuenta</button>
    )
  )
}
export default LoginButton;
 