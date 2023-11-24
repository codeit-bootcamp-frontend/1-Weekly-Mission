import { useState } from "react";
import { Outlet } from "react-router-dom";
import { StyleGlobal } from 'css/StyleGlobal';
import { Footer, Nav } from "component";

export default function App() {
  const { isError, setIsError} = useState(false);
 
  return (
    <>
      <StyleGlobal />
      <Nav setIsError={setIsError}/>
      {!isError&&<Outlet />}
      <Footer />
    </>
  );
}