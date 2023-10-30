import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage/FolderPage";
import "./styles/global.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/folder" element={<FolderPage />} />
      </Routes>
    </Router>
  );
};

export default App;
