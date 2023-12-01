import styles from "./AddCardModal.module.scss";
import { MouseEvent } from "react";
import { CardProps, FolderInterface } from "@/types";

interface Props extends CardProps {
  folderList?: FolderInterface[];
}
function AddCardModal({ card, folderList }: Props) {
  const handleToggle = (e: MouseEvent<HTMLDivElement>) => {
    (e.target as Element).classList.toggle(`${styles["checked"]}`);
  };

  return (
    <div className={styles["modal-content"]}>
      <h2 className={styles["modal-title"]}>폴더에 추가</h2>
      <p className={styles["modal-desc"]}>{card.url}</p>

      {folderList?.map((folder) => {
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

export default AddCardModal;
