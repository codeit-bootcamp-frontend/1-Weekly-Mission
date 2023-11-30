import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import DefaultLayout from "./DefaultLayout";
import { GlobalStyle } from './style/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<DefaultLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
