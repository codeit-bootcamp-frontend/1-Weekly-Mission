import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const rootDiv = document.getElementById("root");
if (rootDiv) {
  const root = ReactDOM.createRoot(rootDiv);
  root.render(<App />);
  reportWebVitals();
}
