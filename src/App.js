import { BrowserRouter, Route, Routes } from "react-router-dom";
import FolderPage from "./pages/FolderPage";
import SharedPage from "./pages/SharedPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/folder" element={<FolderPage />} />
        <Route path="/shared" element={<SharedPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
