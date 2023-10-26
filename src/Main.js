import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import Shared from "./pages/Shared";
import Folder from "./pages/Folder";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="shared" element={<Shared />} />
        <Route path="folder" element={<Folder />} />
      </Route>
    </Routes>
  );
}

export default Main;
