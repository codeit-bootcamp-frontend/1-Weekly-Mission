import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";

import "./assets/styles/reset.css";
import "./assets/styles/index.css";
import "./assets/fonts/pretendard/pretendard.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<Main />);
}
