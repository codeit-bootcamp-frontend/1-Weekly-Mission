import "./assets/css/reset.css";
import "./assets/css/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";
import NothingPage from "./pages/NothingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Query />}></Route> */}
          <Route path="folder">
            <Route index element={<FolderPage />} />
            {/* naviate가 되면은 다시 처음부터 렌더링이 된다 */}
            <Route path=":folderId" element={<FolderPage />} />
            <Route path="nothing" element={<NothingPage />} />
          </Route>
          <Route path="/shared" element={<SharedPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
