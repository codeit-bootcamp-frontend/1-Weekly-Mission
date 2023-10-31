import React, { useContext, useEffect, useState } from "react";
import styles from "./FolderMenu.module.css";
import titleImage from "../../assets/images/title.svg";
import LocaleContext from "../../contexts/LocaleContext";

export default function FolderMenu({ folderId }) {
  const [isSelected, setIsSelected] = useState(false);
  const [letter, setLetter] = useState("전체");
  const [num, setNum] = useState(null);
  const value = useContext(LocaleContext);

  useEffect(() => {
    setNum(folderId || "전체");

    if (value[folderId]) {
      setLetter(value[folderId]["folderName"] || "전체");
      setIsSelected(true);
    } else {
      setLetter("전체");
      setIsSelected(false);
    }
  }, [folderId]);

  return (
    <div className={styles.container}>
      <p className={styles.title}>{letter}</p>
      {isSelected && (
        <img
          className={styles.images__container}
          src={titleImage}
          alt={letter}
        ></img>
      )}
    </div>
  );
}
