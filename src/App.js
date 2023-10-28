import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "layouts/Layout.jsx";
import LinkSharePage from "pages/linkShare/LinkSharePage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="shared" element={<LinkSharePage />}></Route>
          <Route path="privacy" element={<>Privacy Policy</>}></Route>
          <Route path="faq" element={<>FAQ</>}></Route>
          <Route index element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
