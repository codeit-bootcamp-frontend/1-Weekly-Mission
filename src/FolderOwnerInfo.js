import React, { useState, useEffect } from "react";
import "./FolderOwnerInfo.css";

const FolderOwnerInfo = () => {
  const [ownerName, setOwnerName] = useState("");
  const [folderName, setFolderName] = useState("");
  const [ownerImage, setOwnerImage] = useState("");

  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/sample/folder")
      .then((response) => response.json())
      .then((data) => {
        setFolderName(data.folder.name);
        setOwnerName(data.folder.owner.name);
        setOwnerImage(data.folder.owner.profileImageSource);
      });
  }, []);

  return (
    <div className="owner-info">
      <img src={ownerImage} alt="Folder Owner" className="owner-image" />
      <div className="owner-name">@{ownerName}</div>
      <div className="owner-favorites">
        <span>{folderName}</span>
      </div>
    </div>
  );
};

export default FolderOwnerInfo;
