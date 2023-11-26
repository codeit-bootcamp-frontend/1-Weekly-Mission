import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";
import { HelmetProvider } from "react-helmet-async";
import GlobalStyles from "./style/GlobalStyles";
import "./assets/css/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <GlobalStyles />
      <Main />
    </HelmetProvider>
  </React.StrictMode>
);
