import { LoginButton } from "./Button";
import style from "./Profile.module.css";
import { useEffect, useState } from "react";
import { getsampleFolder } from "../api/sampleFolder";

function Profile() {
  const [folderInfo, setFolderInfo] = useState("");

  const loadFolder = async () => {
    const { folder } = await getsampleFolder();
    setFolderInfo(folder);
  };
  useEffect(() => {
    loadFolder();
  }, []);
  if (folderInfo) {
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
  return (
    <div className="profile">
      <LoginButton />
    </div>
  );
}

export default Profile;
