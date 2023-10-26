import { useState, useEffect } from "react";
import React from "react";
import Search from "./Search";
import CardList from "./CardList";
import { getFolder } from "../../api/apiUrl";
import useAsync from "../../hooks/useAsync";

const FolderList = () => {
  return <div></div>;
  // <div className="main">
  //   <div className="Header_wrapper">
  //     <div className="Header_container">
  //       <img className="avatar_img" src={avatarImg} alt="avatar"></img>
  //       <span className="folder_owner">{`@${ownerName}`}</span>
  //       <span className="folder_name">{folderName}</span>
  //     </div>
  //   </div>
  //   <Search />
  //   {!loadingError ? <CardList folderLinks={links} /> : loadingError.message}
  // </div>
  // );
};

export default FolderList;
