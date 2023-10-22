import "../styles/reset.css";
import HeaderSpace from "./HeaderSpace.js";
import MainSpace from "./MainSpace.js";
import FooterSpace from "./FooterSpace.js";
import { getData } from "../api";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [profile, setProfile] = useState([]);
  // const [user, setUser] = useState([]);

  const handleLoad = async () => {
    const {
      folder: { links },
    } = await getData();
    setItems(links);

    const {
      folder: { name: title, owner },
    } = await getData();
    const ownerProfile = { title, ...owner };
    setProfile(ownerProfile);
  };

  // const handleUserLoad = async () => {
  //   const { userProfile } = await getUserData();
  //   setUser(userProfile);
  // };

  useEffect(() => {
    handleLoad();
    // handleUserLoad();
  }, []);

  return (
    <>
      <HeaderSpace items={profile} />
      <MainSpace items={items} />
      <FooterSpace />
    </>
  );
}

export default App;
