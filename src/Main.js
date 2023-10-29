import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage";
import FolderPage from "./pages/FolderPage";
import SharedPage from "./pages/SharedPage";
import NoDataPage from "./pages/NoDataPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="shared" element={<SharedPage />} />
          <Route path="folder" element={<FolderPage />} />
          <Route path="nodata" element={<NoDataPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
