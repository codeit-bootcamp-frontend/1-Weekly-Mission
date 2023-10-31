import "./assets/css/reset.css";
import "./assets/css/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";
import NothingPage from "./pages/NothingPage";
import Query from "./Query";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Query />}></Route> */}
            <Route path="folder">
              <Route index element={<FolderPage />} />
              <Route path=":folderId" element={<FolderPage />} />
              <Route path="nothing" element={<NothingPage />} />
            </Route>
            <Route path="/shared" element={<SharedPage />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </div>
  );
}

export default App;
