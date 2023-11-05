import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./colors.css";
import "./reset.css";
import FolderPage from "./pages/FolderPage";
import SharedPage from "./pages/SharedPage";
import Layout from "./components/layout/Layout";
import NotFoundLink from "./components/Card/NotFoundLink";
import { UserIdProvider } from "./contexts/UersIdContext";

const App = () => {
  return (
    <UserIdProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/folder" element={<FolderPage />} />
            <Route path="/shared" element={<SharedPage />} />
            <Route path="*" element={<NotFoundLink />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserIdProvider>
  );
};

export default App;
