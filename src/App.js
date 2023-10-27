import "styles/globalStyles.css";

import { Route, Routes } from "react-router-dom";

import Layout from "components/layout";
import SharedPage from "pages/shareFolder";
import FolderPage from "pages/folder";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/shared" element={<SharedPage />}></Route>
          <Route path="/folder" element={<FolderPage />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
