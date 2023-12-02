import { MouseEvent } from "react";
import styles from "./FolderNav.module.css";
import { FolderInfo } from "@/API/getCurrentUsersFolderData";

interface Props {
  folderList: FolderInfo[];
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  folderID: string | string[] | undefined;
}

function FolderNav({ folderList, onClick, folderID }: Props) {
  const lists = [
    {
      id: 0,
      name: "전체",
    },
    ...folderList,
  ];

  const isSelected = (id: number) => {
    if (Number(folderID) === id) return true;
    if (!folderID && !id) return true;
  };

  return (
    <ul className={styles.root}>
      {lists.map(({ id, name }) => {
        const seletedStyles = isSelected(id) ? `${styles.button} ${styles.selected}` : `${styles.button}`;

        return (
          <li className={styles.li} key={id}>
            <button name="folderId" type="button" value={id} onClick={onClick} className={seletedStyles}>
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default FolderNav;
