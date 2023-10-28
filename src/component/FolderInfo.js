import { LinkButton } from "./LinkButton";
import style from "./FolderInfo.module.css";
import { useEffect, useState } from "react";
import { getsampleFolder } from "../api/sampleFolder";

function FolderInfo() {
  const [folderInfo, setFolderInfo] = useState("");

  const loadFolder = async () => {
    const { folder } = await getsampleFolder();
    setFolderInfo(folder);
  };
  useEffect(() => {
    loadFolder();
  }, []);

  return (
    <div className={style.root}>
      <img
        className={style.img}
        src={folderInfo.owner.profileImageSource}
        alt="프로필 이미지"
      />
      <div className={style.userName}>@{folderInfo.owner.name}</div>
      <div className={style.folderName}>{folderInfo.name}</div>
    </div>
  );
}
export default FolderInfo;
