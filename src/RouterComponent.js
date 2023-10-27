import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import Shared from "./pages/Shared";
import Folder from "./pages/Folder";

function RouterComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="shared" element={<Shared />} />
          <Route path="folder" element={<Folder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterComponent;
