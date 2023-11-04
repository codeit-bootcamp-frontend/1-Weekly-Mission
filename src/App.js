import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectPage from "./pages/SelectPage";
import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectPage />} />
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/folder" element={<FolderPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
