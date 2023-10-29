import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import FolderPage from "./pages/FolderPage/FolderPage";
import SharedPage from "./pages/SharedPage/SharedPage";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Pretendard;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<MainPage />} /> */}
          <Route path="/" element={<FolderPage />} />
          {/* <Route path="/folder" element={<FolderPage />} />*/}
          <Route path="/shared" element={<SharedPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
