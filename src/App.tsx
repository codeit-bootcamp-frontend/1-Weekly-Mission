import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "styles/GlobalStyles";
import MainPage from "pages/MainPage";
import FolderPage from "pages/FolderPage";
import React from 'react';
// import SharedPage from "pages/SharedPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />}>
        </Route>
        <Route path="folder" element={<FolderPage />}></Route>
        {/* <Route path="shared" element={<SharedPage />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
