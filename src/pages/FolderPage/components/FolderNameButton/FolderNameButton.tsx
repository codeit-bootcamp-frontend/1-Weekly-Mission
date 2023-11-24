/* 사용자의 folder list 각 요소를 버튼으로 보여주는 컴포넌트 */

import styles from "./FolderNameButton.module.css";
import { MouseEvent } from "react";

let prev: MouseEvent;

interface Props {
  folder: {
    id: string;
    name: string;
  };
  onChange: (i: string, j: string) => void;
}

function FolderNameButton({ folder, onChange }: Props) {
  const handleButtonClick = (e: MouseEvent) => {
    e.preventDefault();
    onChange(folder.id, folder.name);
    (
      e.target as Element
    ).className = `${styles["folder-name-button"]} ${styles["clicked-folder-button"]}`;
    if (!prev) prev = e;
    else {
      (prev.target as Element).className = `${styles["folder-name-button"]}`;
      prev = e;
    }
  };

  return (
    <button
      type="submit"
      onClick={handleButtonClick}
      className={styles["folder-name-button"]}
    >
      {folder.name}
    </button>
  );
}

export default FolderNameButton;
