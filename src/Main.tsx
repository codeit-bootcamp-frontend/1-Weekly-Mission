import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shared from "./pages/Shared";
import Folder from "./pages/Folder";
import Greeting from "./pages/Greeting";
import SignIn from "./pages/SignIn";
import GlobalStyle from "./global/globalStyles";

function Main() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/shared" element={<Shared />} />
        {/* <Route path='/folder/:id' element={<Folder />} />   */}
        <Route path="/folder" element={<Folder />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
