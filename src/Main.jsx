import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "components";
import { SharedPage, FolderPage } from "pages";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="shared" element={<SharedPage />} />
          <Route path="folder" element={<FolderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
