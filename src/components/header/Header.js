import React, { useEffect, useState } from "react";
import { getfoldersData } from "../../api/folder";

import styles from "./Header.module.css";

export default function Header() {
  const [folderName, setFolderName] = useState("");
  const [profile, setProfile] = useState({});
  const [personName, setPersonName] = useState("");
  const [personImage, setPersonImage] = useState("");

  const handleFolderData = async () => {
    const { folder } = await getfoldersData();
    const { name, owner } = folder;
    setFolderName(name);
    setProfile(owner);
  };

  const handleProfileData = () => {
    const { name, profileImageSource } = profile;
    setPersonName(name);
    setPersonImage(profileImageSource);
  };

  useEffect(() => {
    handleFolderData();
    // api clean-up
    return () => {};
  }, []);

  useEffect(() => {
    handleProfileData();
    return () => {};
  }, [profile]);
  return (
    <div className={styles.container}>
      <img src={personImage} alt={personName} width="200"></img>
      <p className={styles.text__codeit}>{personName}</p>
      <p className={styles.text__favorite}>{folderName}</p>
    </div>
  );
}
