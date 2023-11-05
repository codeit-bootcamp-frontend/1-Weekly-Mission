import "../../styles/reset.css";
import HeaderSpace from "../HeaderSpace";
import MainSpace from "../MainSpace.js";
import FooterSpace from "../FooterSpace.js";
import Nav from "../Nav.js";
import { getFolderData, getUserData } from "../../api";
import { useState, useEffect } from "react";

function Shared() {
  const [items, setItems] = useState([]); //메인의 링크들 렌더링할 때
  const [profile, setProfile] = useState({}); // hero-header 부분 데이터
  const [user, setUser] = useState([]); // nav 우측 사용자정보

  const handleFolderLoad = async () => {
    // eslint-disable-line no-unused-vars
    try {
      const {
        folder: { links, name: title, owner },
      } = await getFolderData();

      setItems(links);
      setProfile({ title, ...owner });
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
