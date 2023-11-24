import { Routes, Route } from "react-router-dom";
import Shared from "./pages/shared/Shared.js";
import Folder from "./pages/folder/Folder.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/shared" element={<Shared />} />
        <Route path="/folder" element={<Folder />} />
      </Routes>
    </div>
  );
}

export default App;
