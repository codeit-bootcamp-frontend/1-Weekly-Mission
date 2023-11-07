import { createContext, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";
import Modal from "./components/Modal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Modal />}></Route>
          <Route path="shared"></Route>
          <Route index element={<SharedPage />}></Route>
          <Route path="folder">
            <Route index element={<FolderPage />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
