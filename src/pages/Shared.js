import "../styles/reset.css";
import HeaderSpace from "../components/HeaderSpace";
import MainSpace from "../components/MainSpace.js";
import FooterSpace from "../components/FooterSpace.js";
import Nav from "../components/Nav";
import { getFolderData, getUserData } from "../api";
import { useState, useEffect } from "react";

function Shared() {
  const [items, setItems] = useState([]);
  const [profile, setProfile] = useState([]);
  const [user, setUser] = useState([]);

  const handleFolderLoad = async () => {
    // eslint-disable-line no-unused-vars
    try {
      const {
        folder: { links, name: title, owner },
      } = await getFolderData();
      const ownerProfile = { title, ...owner };
      setItems(links);
      setProfile(ownerProfile);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserLoad = async () => {
    try {
      const {
        name,
        email: userEmail,
        profileImageSource: userImage,
      } = await getUserData();
      setUser({ name, userEmail, userImage });
    } catch (error) {
      console.log(error);
    }
  };

  const initialize = async () => {
    await handleFolderLoad();
    await handleUserLoad();
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <>
      <Nav lists={user} />
      <HeaderSpace profiles={profile} />
      <MainSpace items={items} />
      <FooterSpace />
    </>
  );
}

export default Shared;
