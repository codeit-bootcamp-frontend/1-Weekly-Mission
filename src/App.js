import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "commons/components/Layout/Layout";

import { FolderPage, SharedPage, HomePage } from "./pages/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
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

export default App;
