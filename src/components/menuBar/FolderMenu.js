import React, { useContext, useEffect, useState } from "react";
import styles from "./FolderMenu.module.css";
import titleImage from "../../assets/images/title.svg";
import LocaleContext from "../../contexts/LocaleContext";

// APP에서 뿌려줌
export default function FolderMenu({ folderId }) {
  // const [isSelected, setIsSelected] = useState(false);
  // const [letter, setLetter] = useState("전체");
  // const [num, setNum] = useState(folderId);

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
        <img
          className={styles.images__container}
          src={titleImage}
          alt={letter}
        ></img>
      )}
    </div>
  );
}
