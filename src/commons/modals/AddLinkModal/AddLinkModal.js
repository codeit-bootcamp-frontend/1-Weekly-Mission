import styles from "./AddLinkModal.module.scss";
import { getFolderList } from "apis/getFolderList";
import { useState, useEffect } from "react";
import useAsync from "apis/useAsync";

function AddLinkModal({ linkId = "" }) {
  const [folderList, setFolderList] = useState([]);
  const [pending, error, getFolderListAsync] = useAsync(getFolderList);

  const getter = async () => {
    const allFolders = await getFolderListAsync();
    setFolderList(allFolders?.data);
  };

  useEffect(() => {
    getter();
  }, []);
  console.log(folderList);
  const handleToggle = (e) => {
    e.target.classList.toggle(`${styles["checked"]}`);
  };

  return (
    <div className={styles["modal-content"]}>
      <h2 className={styles["modal-title"]}>폴더에 추가</h2>
      <p className={styles["modal-desc"]}>{linkId}</p>

      {folderList.map((folder) => {
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
