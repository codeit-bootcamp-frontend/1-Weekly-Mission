import { MouseEvent } from "react";
import styles from "./FolderNav.module.css";
import { FolderInfo } from "@/API/getCurrentUsersFolderData";
import { useRouter } from "next/router";

interface Props {
  folderList: FolderInfo[];
  folderId: string | string[] | undefined;
}

function FolderNav({ folderList, folderId }: Props) {
  const lists = [
    {
      id: 0,
      name: "전체",
    },
    ...folderList,
  ];

  const router = useRouter();

  function handleClick(e: MouseEvent) {
    e.preventDefault();
    const { value } = e.target as HTMLButtonElement;
    router.push(`/folder?folderId=${value}`);
  }

  const isSelected = (id: number) => {
    if (Number(folderId) === id) return true;
    if (!folderId && !id) return true;
  };

  return (
    <ul className={styles.root}>
      {lists.map(({ id, name }) => {
        const seletedStyles = isSelected(id) ? `${styles.button} ${styles.selected}` : `${styles.button}`;

        return (
          <li className={styles.li} key={id}>
            <button name="folderId" type="button" value={id} onClick={handleClick} className={seletedStyles}>
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default FolderNav;
