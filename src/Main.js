import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SharedPage from "./pages/sharedPage/SharedPage";
import FolderPage from "./pages/folderPage/FolderPage";

const Main = () => {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<SharedPage />} />
          <Route path="folder" element={<FolderPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
};

export default Main;
