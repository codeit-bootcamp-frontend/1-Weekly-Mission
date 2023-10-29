import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedPage from "./pages/SharedPage";
import App from "./components/App/App";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shard" element={<App />}>
          <Route index element={<SharedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
