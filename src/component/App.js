import { createContext, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { StyleGlobal } from 'css/StyleGlobal';
import { Footer, Nav } from "component";

export const footerContext = createContext();

export default function App() {
  const { isError, setIsError} = useState(false);
  const footer = useRef();

  return (
    <>
      <StyleGlobal />
      <Nav setIsError={setIsError}/>
      {!isError&&<footerContext.Provider value={footer}><Outlet /></footerContext.Provider>}
      <Footer ref={footer}/>
    </>
  );
}