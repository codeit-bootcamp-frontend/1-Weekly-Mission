import { Routes, Route } from "react-router-dom";
import Shared from "../components/Shared/Shared.js";
import Folder from "../components/Folder/Folder.js";

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
