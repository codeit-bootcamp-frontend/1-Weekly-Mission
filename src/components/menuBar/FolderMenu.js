import React, { useContext } from "react";
import styles from "./FolderMenu.module.css";

import LocaleContext from "../../contexts/LocaleContext";
import shareImage from "../../assets/images/share.svg";
import nameChangeImage from "../../assets/images/namechange.svg";
import deleteImage from "../../assets/images/delete.svg";
export default function FolderMenu({ folderId }) {
  const localeValue = useContext(LocaleContext); // obj
  const folder = localeValue[folderId];
  // folder의 타입이 undefined가 아니면은 isSelected = ture, undefined이면은 false
  const isSelected = typeof folder !== "undefined";
  // optional chaining 사용 , folder의 folderName키가 undefined, 즉없으면은 전체를 나오게한다
  const letter = folder?.folderName || "전체";

  return (
    <div className={styles.container}>
      <p className={styles.title}>{letter}</p>

      {isSelected && (
        <div className={styles.images__container}>
          <img src={shareImage} alt="share" />
          <img src={nameChangeImage} alt="nameChange" />
          <img src={deleteImage} alt="delete" />
        </div>
      )}
    </div>
  );
}
