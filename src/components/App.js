import "../styles/reset.css";
import HeaderSpace from "./HeaderSpace.js";
import MainSpace from "./MainSpace.js";
import FooterSpace from "./FooterSpace.js";
import { getFolderData, getUserData } from "../api";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [profile, setProfile] = useState([]);
  const [user, setUser] = useState([]);

  const HandleFolderLoad = async () => {
    // eslint-disable-line no-unused-vars
    try {
      const {
        folder: { links },
      } = await getFolderData();
      setItems(links);

      const {
        folder: { name: title, owner },
      } = await getFolderData();
      const ownerProfile = { title, ...owner };
      setProfile(ownerProfile);
    } catch (error) {
      console.log(error);
    }
  };
  const HandleUserLoad = async () => {
    try {
      const {
        name,
        email,
        profileImageSource: userImage,
      } = await getUserData();
      setUser({ name, email, userImage });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    HandleFolderLoad();
  }, []);

  useEffect(() => {
    HandleUserLoad();
  }, []);

  return (
    <>
      <HeaderSpace items={profile} lists={user} />
      <MainSpace items={items} />
      <FooterSpace />
    </>
  );
}

export default App;
