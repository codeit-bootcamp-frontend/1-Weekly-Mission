import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import GlobalStyle from "./globalStyle";
import SelectPage from "./pages/SelectPage";
import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SelectPage />} />
          <Route path="/shared" element={<SharedPage />} />
          <Route path="/folder" element={<FolderPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default App;
