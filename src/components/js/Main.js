import React from "react";
import Search from "./Search";
import CardList from "./CardList";

const Main = ({ folderLinks, owner, folderName }) => {
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
      <CardList folderLinks={folderLinks} />
    </div>
  );
};

export default Main;
