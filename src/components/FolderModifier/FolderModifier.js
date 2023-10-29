/* 폴더 페이지에 있는 폴더 공유, 이름변경, 삭제 기능 버튼 컴포넌트*/

/* css 모듈 방식 적용 
   "전체" 폴더 페이지에는 적용되지 않는 컴포넌트.
   */

import styles from "./FolderModifier.module.css";
import shareIcon from "../../assets/share-icon.svg";
import renameIcon from "../../assets/rename-icon.svg";
import deleteIcon from "../../assets/delete-icon.svg";

function FolderButtons() {
  return (
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
  );
}

export default FolderButtons;
