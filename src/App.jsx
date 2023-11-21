import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "pages/MainPage";
import FolderPage from "pages/FolderPage";
import SharedPage from "pages/SharedPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="folder" element={<FolderPage />}></Route>
          <Route path="shared" element={<SharedPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
