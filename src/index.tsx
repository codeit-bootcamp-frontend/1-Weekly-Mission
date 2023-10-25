import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "libs/apis/queryClient";
import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import Router from "router/Router";
import "styles/index.css";
import "styles/variables.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ErrorBoundary fallback={<div>에러 발생 🤒</div>}>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <Router />
      </React.StrictMode>
    </QueryClientProvider>
  </ErrorBoundary>
);
