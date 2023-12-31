import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "dev-iivs0tz4fawrf6kv.us.auth0.com";
const client = "iepSCLtag2YwL9PEu0DWX0p8X1fzDnyJ";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
      <Auth0Provider
      domain={domain}
      clientId={client}
      redirectUri={"http://localhost:3000/panel"}>
         <App />
      </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
