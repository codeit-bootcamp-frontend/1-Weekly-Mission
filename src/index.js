import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";
import "./assets/css/index.css";
import GlobalStyles from "./style/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <GlobalStyles />
      <Main />
    </>
  </React.StrictMode>
);
