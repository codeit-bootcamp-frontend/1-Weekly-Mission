import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedPage from "./Pages/SharedPage/SharedPage";
import FolderPage from "./Pages/components/FolderPage";
import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/shared" element={<SharedPage />} />
          <Route path="/folder" element={<FolderPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
