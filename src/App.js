import "styles/globalStyles.css";

import { Route, Routes } from "react-router-dom";

import Layout from "components/layout";
import SharedPage from "pages/shareFolder";
import FolderPage from "pages/folder";

import { FolderContextProvider } from "context/FolderContext";

function App() {
  return (
    <FolderContextProvider>
      <Layout>
        <Routes>
          <Route path="/shared" element={<SharedPage />}></Route>
          <Route path="/folder" element={<FolderPage />}></Route>
        </Routes>
      </Layout>
    </FolderContextProvider>
  );
}

export default App;
