import { MouseEvent } from "react";
import styles from "./FolderNav.module.css";

type Folder = {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  link: {
    count: number;
  };
};

interface Props {
  folderLists: Folder[];
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  folderID: string;
}

function FolderNav({ folderLists, onClick, folderID }: Props) {
  const lists = [
    {
      id: 0,
      name: "전체",
    },
    ...folderLists,
  ];
  return (
    <ul className={styles.root}>
      {lists.map(({ id, name }) => {
        const isSelected = Number(folderID) === id ? `${styles.button} ${styles.selected}` : `${styles.button}`;

        return (
          <li className={styles.li} key={id}>
            <button name="folderId" type="button" value={id} onClick={onClick} className={isSelected}>
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default FolderNav;
