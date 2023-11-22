import React, { useContext, useRef, useState } from "react";
import styles from "./HeaderModal.module.css";
import LocaleContext from "../../contexts/LocaleContext";
import check from "../../assets/images/check.svg";

export default function HeaderModal({ setterFunc, inputLink = null }) {
  const { LinkSDataArr: linkData } = useContext(LocaleContext);
  const [clickedFolderName, setClickedFolderName] = useState("");
  const [isAdd, setIsAdd] = useState(false);

  const handleClick = (folderName) => {
    setIsAdd(!isAdd);
    setClickedFolderName(folderName);
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal__container}>
        <button
          className={styles.cancel__button}
          onClick={() => setterFunc(false)}
        >
          X
        </button>
        <p className={styles.title}>폴더에추가</p>
        <p>{inputLink}</p>
        {linkData.map((item) => {
          const { folderName, linksdata } = item;
          return (
            <p
              key={item.folderId}
              className={styles.links}
              onClick={() => handleClick(folderName)}
            >
              <p>
                <span>{folderName} </span>
                {linksdata && linksdata.length}개링크
              </p>
              {isAdd && folderName === clickedFolderName && (
                <img src={check} alt="check" />
              )}
            </p>
          );
        })}
        <button className={styles.button}>추가하기</button>
      </div>
    </div>
  );
}
