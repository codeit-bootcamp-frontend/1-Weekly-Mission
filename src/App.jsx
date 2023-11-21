import { BrowserRouter, Routes, Route } from "react-router-dom";
import FolderPage from "./components/Pages/FolderPage/FolderPage";
import SharedPage from "./components/Pages/SharedPage/SharedPage";

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
