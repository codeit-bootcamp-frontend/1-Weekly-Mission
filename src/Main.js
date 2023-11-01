import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shared from "./pages/Shared";
import Folder from "./pages/Folder";
import Greeting from "./pages/Greeting";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/shared" element={<Shared />} />
        {/* <Route path='/folder/:id' element={<Folder />} />   */}
        {/* 로그인하면 이렇게 구현 */}
        <Route path="/folder" element={<Folder />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
