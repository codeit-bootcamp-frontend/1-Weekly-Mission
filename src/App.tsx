import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "src/pages/Error/ErrorPage";
import FolderPage from "src/pages/Folder/FolderPage";
import SelectPage from "src/pages/Select/SelectPage";
import SharedPage from "src/pages/Shared/SharedPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectPage />} />
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/folder" element={<FolderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
