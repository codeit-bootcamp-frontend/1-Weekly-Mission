import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Shared from "./pages/Shared";
import Folder from "./pages/Folder";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="shared" element={<Shared />} />
          <Route path="folder" element={<Folder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
