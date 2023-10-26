import "./assets/css/reset.css";
import "./assets/css/global.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import SharedPage from "./pages/SharedPage"; // 얜 왜 빨간색?
import FolderPage from "./pages/FolderPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/folder" element={<FolderPage />} />
          <Route path="/shared" element={<SharedPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
