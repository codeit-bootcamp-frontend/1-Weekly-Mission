import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import GlobalLayout from "./layouts/GlobalLayout";
import FolderPage from "./components/pages/folderPage/FolderPage";
import SharedPage from "./components/pages/sharedPage/SharedPage";
import ErrorPage from "./components/pages/errorPage/ErrorPage";
function Main() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<GlobalLayout />}>
          <Route index element={<SharedPage />} />
          {/* 요기고쳐야함 */}
          <Route path="folder" element={<FolderPage />} />
          <Route path="folder/:folderId" element={<FolderPage />} />
          <Route path="folder" element={<FolderPage />} />
          <Route path="shared" element={<SharedPage />} />
          <Route path="error" element={<ErrorPage />} />
          <Route path="*" element={<SharedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
