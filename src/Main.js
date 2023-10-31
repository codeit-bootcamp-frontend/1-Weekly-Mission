import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import FolderPage from "./pages/FolderPage/FolderPage";

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="folder">
            <Route index element={<FolderPage />} />
            <Route path=":folderId" element={<FolderPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
