import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";

import "./styles/reset.css";
import "./styles/index.css";
import "./assets/fonts/pretendard/pretendard.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<Main />);
}
