import App from "./components/App";
import Folder from "./pages/Folder";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shared from "./pages/Shared";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="shared" element={<Shared />} />
        <Route path="folder" element={<Folder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
