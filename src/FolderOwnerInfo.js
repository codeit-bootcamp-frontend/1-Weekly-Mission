import React, { useState, useEffect } from "react";
import "./FolderOwnerInfo.css";

function FolderOwnerInfo() {
  const [ownerName, setOwnerName] = useState("");
  const [folderName, setFolderName] = useState("");
  const [ownerImage, setOwnerImage] = useState("");

  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/sample/folder")
      .then((response) => response.json())
      .then((data) => {
        setFolderName(data.folder.name);
      });

    fetch("https://bootcamp-api.codeit.kr/api/sample/user")
      .then((response) => response.json())
      .then((data) => {
        setOwnerName(data.name);
        setOwnerImage(data.profileImageSource);
      });
  }, []);

  return (
    <div className="owner-info">
      {/* 폴더 소유자 이미지 출력 */}
      <img src={ownerImage} alt="Folder Owner" className="owner-image" />

      {/* 폴더 소유자 이름 출력 */}
      <div className="owner-name">@{ownerName}</div>

      {/* 폴더 소유자 즐겨찾기 이름 출력 */}
      <div className="owner-favorites">
        <span>{folderName}</span>
      </div>
    </div>
  );
}

export default FolderOwnerInfo;
