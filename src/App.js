import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import "./colors.css";
import "./reset.css";
import FolderPage from "./pages/FolderPage";
import SharedPage from "./pages/SharedPage";
import Layout from "./layout/Layout";
import NotFoundLink from "./components/Card/NotFoundLink";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/folder" element={<FolderPage />} />
            <Route path="/shared" element={<SharedPage />} />
            <Route path="*" element={<NotFoundLink />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
