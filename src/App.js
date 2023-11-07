import "./assets/css/reset.css";
import "./assets/css/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="folder">
            <Route index element={<FolderPage />} />
            {/* naviate가 되면은 다시 처음부터 렌더링이 된다 */}
            {/* userPams을 해서 param을 가지고 오면은 folderId가 key가 된다 {folderId: number} */}
            <Route path=":folderId" element={<FolderPage />} />
          </Route>
          <Route path="/shared" element={<SharedPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
