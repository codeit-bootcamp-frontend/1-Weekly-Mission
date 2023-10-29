import styles from "./FolderHeader.module.css";
import FolderNameButton from "../FolderNameButton/FolderNameButton";
import { useEffect, useState, useRef } from "react";
import CardList from "../CardList/CardList";
import { getAllCards } from "../../api/api";

import shareIcon from "../../assets/share-icon.svg";
import renameIcon from "../../assets/rename-icon.svg";
import deleteIcon from "../../assets/delete-icon.svg";

const INITIAL_FOLDER = {
  id: "",
  name: "전체",
};

function FolderNameList({ folderList = null, onChange }) {
  const [folderId, setFolderId] = useState("");
  const [folderTitle, setFolderTitle] = useState("전체");
  const handleButton = (name, id) => {
    setFolderTitle(name);
    setFolderId(id);
    onChange(id);
  };

  return (
    <div className={styles["folder-buttons-section"]}>
      <div className={styles["folder-buttons-list"]}>
        <div className={styles["folder-button"]}>
          <FolderNameButton folder={INITIAL_FOLDER} onChange={handleButton} />
        </div>
        {folderList && (
          <>
            {folderList.map((folder) => {
              return (
                <div key={folder.id} className={styles["folder-button"]}>
                  <FolderNameButton folder={folder} onChange={handleButton} />
                </div>
              );
            })}
          </>
        )}
      </div>

      <div className={styles["folder-header"]}>
        <div className={styles["folder-title"]}>{folderTitle}</div>

        {folderId && (
          <div className={styles["folder-modifier-container"]}>
            <button className={styles["folder-modifier-button"]}>
              <img src={shareIcon} alt="share button" />
              공유
            </button>
            <button className={styles["folder-modifier-button"]}>
              <img src={renameIcon} alt="share button" />
              이름 변경
            </button>
            <button className={styles["folder-modifier-button"]}>
              <img src={deleteIcon} alt="share button" />
              삭제
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function FolderHeader({ folderList = null, onChange }) {
  const [cardList, setCardList] = useState([]);
  const getCardList = async (id = "") => {
    const folderResult = await getAllCards(id);
    setCardList(() => {
      return [...folderResult?.data];
    });
  };
  const { current: cardListArray } = useRef(cardList);

  useEffect(() => {
    getCardList();
  }, [cardListArray]);
  return (
    <>
      <FolderNameList folderList={folderList} onChange={getCardList} />
      <button type="button" className="add-folder-button">
        폴더 추가+
      </button>
      <div className="section">
        <CardList cardList={cardList} />
      </div>
    </>
  );
}

export default FolderHeader;
