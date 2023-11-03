import { BrowserRouter, Route, Routes } from "react-router-dom";

import { GlobalStyle } from "./style/GlobalStyle";
import SharedPage from './Pages/SharedPage';
import FolderPage from './Pages/FolderPage';


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
