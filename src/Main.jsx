import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "components";
import { SharedPage } from "pages";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="shared" element={<SharedPage />}></Route>
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
