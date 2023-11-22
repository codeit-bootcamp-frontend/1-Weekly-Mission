import "styles/globalStyles.css";

import { Route, Routes } from "react-router-dom";

import Layout from "components/layout";
import SharedPage from "pages/shareFolder";
import FolderPage from "pages/folder";

import { FolderContextProvider } from "context/FolderContext";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/shared" element={<SharedPage />}></Route>
        <Route
          path="/folder"
          element={
            <FolderContextProvider>
              <FolderPage />
            </FolderContextProvider>
          }
        ></Route>
      </Routes>
    </Layout>
  );
}

export default App;
