import { useState, useEffect, useCallback } from "react";
import React from "react";
import Search from "./Search";
import CardList from "./CardList";
import { getFolder } from "../../api/apiUrl";
import useAsync from "../../hooks/useAsync";

const Main = () => {
  const [folderLinks, setFolderLinks] = useState([]);
  const [folderName, setFolderName] = useState("");
  const [owner, setOwner] = useState({});
  const [loadingError, getFolderAsync] = useAsync(getFolder);

  //커스텀 훅이 잘 작동하지 않는 문제의 부분입니다..
  const handleLoad = useCallback(async () => {
    const folderResult = await getFolderAsync();
    if (!folderResult) return;

    const {
      folder: { owner, links, name },
    } = folderResult;
    setFolderLinks(links);
    setFolderName(name);
    setOwner(owner);
  }, [getFolderAsync]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  const { name, profileImageSource } = owner;
  const ownerName = name;
  const avatarImg = profileImageSource;

  return (
    <div className="main">
      <div className="Header_wrapper">
        <div className="Header_container">
          <img className="avatar_img" src={avatarImg} alt="avatar"></img>
          <span className="folder_owner">{`@${ownerName}`}</span>
          <span className="folder_name">{folderName}</span>
        </div>
      </div>
      <Search />
      {!loadingError ? (
        <CardList folderLinks={folderLinks} />
      ) : (
        loadingError.message
      )}
    </div>
  );
};

export default Main;
