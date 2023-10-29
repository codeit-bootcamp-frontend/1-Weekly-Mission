import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./component/App.js";
import SharedPage from "./pages/SharedPage.js";
import FolderPage from "./pages/FolderPage.js";
import "./css/index.css";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="shared" element={<SharedPage />} />
          <Route path="folder" element={<FolderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
