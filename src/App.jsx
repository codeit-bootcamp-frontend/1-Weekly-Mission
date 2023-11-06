import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "layouts/page/PageLayout.jsx";
import LinkSharePage from "pages/linkShare/LinkSharePage.jsx";
import FolderPage from "pages/folder/FolderPage.jsx";
import FolderLinkList from "components/folderLinkList/FolderLinkList.jsx";
import { UserProfileContextProvider } from "contexts/UserProfileContext.js";

export default function App() {
  return (
    <UserProfileContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="folder" element={<FolderPage />}>
              <Route index element={<FolderLinkList />} />
              <Route path=":folderId" element={<FolderLinkList />} />
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
