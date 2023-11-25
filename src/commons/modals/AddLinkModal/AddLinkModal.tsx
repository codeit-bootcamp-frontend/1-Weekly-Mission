import styles from "./AddLinkModal.module.scss";
import { getFolderList } from "src/apis/";
import { useState, useEffect, MouseEvent } from "react";

interface FolderProps {
  id?: string;
  name?: string;
  link?: {
    count?: number;
  };
}

function AddLinkModal({ linkId = "" }) {
  const [folderList, setFolderList] = useState([]);

  const getter = async () => {
    const allFolders = await getFolderList();
    setFolderList(allFolders?.data);
  };

  useEffect(() => {
    getter();
  }, []);
  const handleToggle = (e: MouseEvent<HTMLDivElement>) => {
    (e.target as Element).classList.toggle(`${styles["checked"]}`);
  };

  return (
    <div className={styles["modal-content"]}>
      <h2 className={styles["modal-title"]}>폴더에 추가</h2>
      <p className={styles["modal-desc"]}>{linkId}</p>

      {folderList.map((folder: FolderProps) => {
        return (
          <div className={styles["folder-checkbox"]} onClick={handleToggle}>
            {folder?.name}
            <div className={styles["link-counts"]}>
              {folder?.link?.count}개 링크
            </div>
          </div>
        );
      })}
      <button className={styles["modal-button"]}>추가하기</button>
    </div>
  );
}

export default AddLinkModal;
