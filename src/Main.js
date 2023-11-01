import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./component/App";
import Homepage from "./pages/HomePage";
import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";
import NotFoundPage from "./pages/NotFoundPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="shared" element={<SharedPage />} />
          <Route path="folder" element={<FolderPage />}>
            <Route index element={<FolderPage />} />
            <Route path=":folderId" element={<FolderPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
