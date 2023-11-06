import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/GlobalStyle.css";
import Home from "./Home";
import Shared from "./pages/Shared";
import Folder from "./pages/Folder";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/shared" element={<Shared />} />
          <Route path="/folder" element={<Folder />} />
          <Route path="/folder/:folderLocation" element={<Folder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
