import { useState } from "react";
import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Nav } from "./Nav/Nav.js";
import { Footer } from "./Footer/Footer.js";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    font-size: 62.5%;
  }

  body {
    font-family: "Pretendard", "sans-serif";
    color: #373740;
    font-size: 1.4rem;
    font-weight: 400;
    max-width: 192rem;
    width: auto;
}`

export function App() {
  const { isError, setIsError} = useState(false);
 
  return (
    <>
      <GlobalStyle />
      <Nav setIsError={setIsError}/>
      {!isError&&<Outlet />}
      <Footer />
    </>
  );
}