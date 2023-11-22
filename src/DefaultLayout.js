import React from "react";
import { Route, Routes } from "react-router-dom";

const SharedPage = React.lazy(() => import("./Pages/shared/SharedPage"));
const FolderPage = React.lazy(() => import("./Pages/folder/FolderPage"));

const DefaultLayout = () => {
  return (
    <Routes>
      <Route path="/shared" element={<SharedPage />} />
      <Route path="/folder" element={<FolderPage />} />
    </Routes>
  );
};

export default DefaultLayout;
