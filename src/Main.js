import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";
// import Modals from "./pages/modals/Modals";
function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="shared" element={<SharedPage />} />
          <Route path="folder" element={<FolderPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
