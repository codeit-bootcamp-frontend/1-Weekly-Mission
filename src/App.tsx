import "sharing/styles/reset.css";
import { FolderPage } from "pages/FolderPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SharedPage } from "pages/SharedPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/folder" element={<FolderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
