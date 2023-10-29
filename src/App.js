import "./assets/css/reset.css";
import "./assets/css/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";
import NothingPage from "./pages/NothingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="folder">
            <Route index element={<FolderPage />} />
            <Route path=":folderId" element={<FolderPage />} />
            <Route path="nothing" element={<NothingPage />} />
          </Route>
          <Route path="/shared" element={<SharedPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
