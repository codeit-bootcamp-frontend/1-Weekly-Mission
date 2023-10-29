import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedPage from "./pages/SharedPage";
import App from "./components/App/App";
import FolderPage from "./pages/FolderPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/shard" element={<SharedPage />} />
          <Route path="/folder" element={<FolderPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
