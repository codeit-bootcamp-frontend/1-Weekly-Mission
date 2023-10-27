import { Routes, Route } from "react-router-dom";
import Shared from "../pages/Shared";
import Folder from "../pages/Folder";

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
