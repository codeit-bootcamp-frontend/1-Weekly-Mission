import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import FolderPage from "./pages/FolderPage";
import SharedPage from "./pages/SharedPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="folder">
            <Route index element={<FolderPage />} />
            <Route path=":folderId" element={<FolderPage />} />
          </Route>
          <Route path="shared" element={<SharedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
