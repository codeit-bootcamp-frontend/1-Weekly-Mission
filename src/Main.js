import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import GlobalStyle from "./components/GlobalStyle";
import SharedPage from "./components/pages/SharedPage";
import FolderPage from "./components/pages/FolderPage";

//에러 바운더리
//rem 10px단위
//알트 제대로 정확히
//들여쓰기 두칸 깃헙올릴때
function Main() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<SharedPage />} />
          <Route path="folder" element={<FolderPage />} />
          <Route path="folder/:folderId" element={<FolderPage />} />
          <Route path="shared" element={<SharedPage />} />
          <Route path="*" element={<SharedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
