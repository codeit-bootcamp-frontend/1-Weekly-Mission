import "../styles/reset.css";
import HeaderSpace from "../components/HeaderSpace";
import MainSpace from "../components/MainSpace";
import FooterSpace from "../components/FooterSpace";
import Nav from "../components/Nav";
import "../styles/Folder.css";

import { useState, useEffect } from "react";
import { getSelectItems, getUserData, getRenderLinks } from "../api";
import SelectPart from "../components/SelectPart";
import SearchBar from "../components/SearchBar";

function Folder() {
  const [selectItems, setSelectItem] = useState([]);
  const [userLogin, setUserLogin] = useState([]);
  const [userLinks, setUserLinks] = useState([]);
  const [folderName, setFolderName] = useState([]);
  const [nowFolderId, SetNowFolderId] = useState("");

  const handleSelectItems = async () => {
    try {
      const { data } = await getSelectItems();
      setSelectItem(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserLogin = async () => {
    //nav 상단 우측
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

  const initRender = async () => {
    await handleSelectItems();
    await handleUserLogin();
    await handleRenderItems();
  };

  const handleRenderItems = async () => {
    // 폴더이름 클릭시 해당하는 링크들 렌더링
    try {
      const { data } = await getRenderLinks(nowFolderId);
      if (!data) {
        return;
      }
      setUserLinks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickUpdate = async (name, key) => {
    setFolderName(name);
    SetNowFolderId(key);
  };

  useEffect(() => {
    // 마운트 시 렌더링 되는 것들
    initRender();
  }, []);

  useEffect(() => {
    // 클릭 이후 업데이트
    handleRenderItems();
  }, [nowFolderId]);

  return (
    <>
      <Nav lists={userLogin} />
      <HeaderSpace />
      <SearchBar />

      <SelectPart
        selectItems={selectItems}
        handleClickUpdate={handleClickUpdate}
        folderName={folderName}
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
