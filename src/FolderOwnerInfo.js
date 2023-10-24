import React, { useState, useEffect } from "react";
import "./FolderOwnerInfo.css";

const FolderOwnerInfo = () => {
  const [folderInfo, setFolderInfo] = useState({
    ownerName: "",
    folderName: "",
    ownerImage: "",
  });

  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/sample/folder")
      .then((response) => response.json())
      .then((data) => {
        setFolderInfo({
          ownerName: data.folder.owner.name,
          folderName: data.folder.name,
          ownerImage: data.folder.owner.profileImageSource,
        });
      });
  }, []);

  return (
    <div className="owner-info">
      <img
        src={folderInfo.ownerImage}
        alt="Folder Owner"
        className="owner-image"
      />
      <div className="owner-name">@{folderInfo.ownerName}</div>
      <div className="owner-favorites">
        <span>{folderInfo.folderName}</span>
      </div>
    </div>
  );
};

export default FolderOwnerInfo;
