/* 사용자의 folder list를 받아와 FolderNameButton 컴포넌트를 이용해 버튼을 보여주는 컴포넌트 */

/* css 모듈 방식 적용
   파라미터로 folder list 배열과 FolderPage.js의 loadCard 함수를 받는다.
 */

import FolderNameButton from "../FolderNameButton/FolderNameButton";
import { useState } from "react";
import styles from "./FolderNameList.module.css";

const INITIAL_FOLDER = {
  id: "",
  name: "전체",
};

function FolderNameList({ folderList = null, onChange }) {
  const [folderTitle, setFolderTitle] = useState("전체");
  const handleButton = (name, id) => {
    setFolderTitle(name);
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

      <div className={styles["folder-title"]}>{folderTitle}</div>
    </div>
  );
}

export default FolderNameList;
