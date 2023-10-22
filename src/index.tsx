import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "libs/apis/queryClient";
import React from "react";
import ReactDOM from "react-dom/client";
import Router from "router/Router";
import "styles/index.css";
import "styles/variables.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </QueryClientProvider>
);
