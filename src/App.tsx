import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FolderPage, SharedPage, HomePage, ErrorPage } from "./pages/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="folder">
            <Route index element={<FolderPage />} />
            <Route path=":folderId" element={<FolderPage />} />
          </Route>
          <Route path="shared" element={<SharedPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
