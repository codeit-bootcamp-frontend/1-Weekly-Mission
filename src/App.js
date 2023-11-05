import SharedPage from "./pages/SharedPage";
import "./global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import FolderPage from "./pages/FolderPage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="shared" element={<SharedPage />} />
          <Route path="folder" element={<FolderPage />} />
        </Route>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
