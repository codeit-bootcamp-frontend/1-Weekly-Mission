import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import GlobalStyle from "./components/GlobalStyle";
import SharedPage from "./components/pages/SharedPage";
import FolderPage from "./components/pages/FolderPage";

function Main() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<SharedPage />} />
          <Route path="folder/:folderId" element={<FolderPage />} />
          <Route path="folder" element={<FolderPage />} />
          <Route path="shared" element={<SharedPage />} />
          <Route path="*" element={<SharedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
