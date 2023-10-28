import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shared from "./pages/Shared";
import Folder from "./pages/Folder";
import Home from "./pages/Home";

import "./App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shared" element={<Shared />} />
          <Route path="/Folder" element={<Folder />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
