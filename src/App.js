import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "layouts/Layout.jsx";
import LinkSharePage from "pages/linkShare/LinkSharePage.jsx";
import FolderPage from "pages/folder/FolderPage.jsx";
import Folder from "components/folder/Folder.jsx";
import { UserProfileContextProvider } from "contexts/UserProfileContext.js";

export default function App() {
  return (
    <UserProfileContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="folder" element={<FolderPage />}>
              <Route index element={<Folder />} />
              <Route path=":folderId" element={<Folder />} />
            </Route>
            <Route path="shared" element={<LinkSharePage />}></Route>
            <Route path="privacy" element={<>Privacy Policy</>}></Route>
            <Route path="faq" element={<>FAQ</>}></Route>
            <Route index element={<></>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProfileContextProvider>
  );
}
