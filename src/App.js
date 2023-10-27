import "./assets/css/reset.css";
import "./assets/css/global.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import SharedPage from "./pages/SharedPage"; // 얜 왜 빨간색?
import FolderPage from "./pages/FolderPage";

function App() {
  // const userId = 1;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/folder" element={<FolderPage />} />
          <Route path="/shared" element={<SharedPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
