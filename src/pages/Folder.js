import "../styles/reset.css";
import HeaderSpace from "../components/HeaderSpace";
import MainSpace from "../components/MainSpace";
import FooterSpace from "../components/FooterSpace";
import Nav from "../components/Nav";
import "../styles/Folder.css";

import { useState, useEffect } from "react";
import {
  getSelectItems,
  getUserData,
  getUserLinks,
  getRenderLinks,
} from "../api";
import SelectPart from "../components/SelectPart";
import SearchBar from "../components/SearchBar";

function Folder() {
  const [selectItems, setSelectItem] = useState([]);
  const [userLogin, setUserLogin] = useState([]);
  const [userLinks, setUserLinks] = useState([]);

  const handleSelectItems = async () => {
    try {
      const { data } = await getSelectItems();
      setSelectItem(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserLogin = async () => {
    try {
      const {
        name,
        email: userEmail,
        profileImageSource: userImage,
      } = await getUserData();
      setUserLogin({ name, userEmail, userImage });
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserLinks = async () => {
    try {
      const { data } = await getUserLinks();
      setUserLinks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const initRender = async () => {
    await handleSelectItems();
    await handleUserLogin();
    await handleUserLinks();
  };

  const handleRenderItems = async (targetId) => {
    try {
      const { data } = await getRenderLinks(targetId);
      if (!data) {
        return;
      }
      setUserLinks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    initRender();
  }, []);

  return (
    <>
      <Nav lists={userLogin} />
      <HeaderSpace />
      <SearchBar />

      <SelectPart
        selectItems={selectItems}
        handleRenderItems={handleRenderItems}
        handleUserLinks={handleUserLinks}
      />
      {userLinks.length !== 0 ? (
        <MainSpace items={userLinks} />
      ) : (
        <div className="empty">저장된 링크가 없습니다</div>
      )}
      <FooterSpace />
    </>
  );
}

export default Folder;
