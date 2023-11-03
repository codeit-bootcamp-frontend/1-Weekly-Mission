import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "pages/baseUrl/home/HomePage";
import Shared from "pages/baseUrl/shared/Shared";
import Folder from "pages/baseUrl/folder/Folder";
import NotFound from "pages/baseUrl/notFound/NotFound";

function RouterComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="shared" element={<Shared />} />
          <Route path="folder" element={<Folder />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterComponent;
