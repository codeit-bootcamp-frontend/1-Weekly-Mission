import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./component/App.js";
import SharedPage from "./pages/SharedPage/SharedPage.js";
import FolderPage from "./pages/FolderPage/FolderPage.js";

function Main(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="shared" element={<SharedPage />} />
          <Route path="folder" >
            <Route index element={<FolderPage />} />
            <Route path=":folderId" element={<FolderPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
