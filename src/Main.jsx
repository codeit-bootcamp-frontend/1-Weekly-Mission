import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "components";
import { SharedPage } from "pages";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="shared" element={<SharedPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
