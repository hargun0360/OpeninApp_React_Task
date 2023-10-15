import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { clientID } from "./Config";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
    <GoogleOAuthProvider clientId="209857792114-12kt9pv7ujrbdp36ovh6qdneres5juls.apps.googleusercontent.com">
      <App />
      </GoogleOAuthProvider>
    </Router>
  </React.StrictMode>
);
