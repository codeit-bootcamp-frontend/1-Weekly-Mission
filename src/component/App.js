import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "./Nav.js";
import { Footer } from "./Footer.js";
import { profileRequestApi } from "../api/requestApi.js";


export function App() {
  const [user, setUser] = useState([]);

  async function profile(){
    try{
      const profile = await profileRequestApi("users/1");
      setUser(profile);
    }catch{
      
    }
  }
  
  useEffect(()=> {
    profile()
  },[])
  
  return (
    <>
      <Nav user={user}/>
      <Outlet />
      <Footer />
    </>
  );
}
