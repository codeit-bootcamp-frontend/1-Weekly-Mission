import styles from "./AddCardModal.module.scss";
import { getFolderList } from "src/apis/";
import { useState, useEffect, MouseEvent } from "react";
import { CardInterface } from "src/types";

interface FolderProps {
  id?: string;
  name?: string;
  link?: {
    count?: number;
  };
}

interface Props {
  card: CardInterface;
}

function AddCardModal({ card }: Props) {
  console.log(card);
  const [folderList, setFolderList] = useState([]);

  const getter = async () => {
    const { data } = await getFolderList();
    if (data) {
      setFolderList(data);
    }
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
      <p className={styles["modal-desc"]}>{card.url}</p>

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

export default AddCardModal;
