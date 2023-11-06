import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="shared" element={<SharedPage />}></Route>
          <Route path="folder">
            <Route index element={<FolderPage />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
