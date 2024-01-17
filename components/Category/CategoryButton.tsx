import { ReactNode, Dispatch, SetStateAction, useEffect } from "react";
import {
  useFolderId,
  useSetFolderId,
  useUserId,
} from "../../contexts/UserContext";
import styles from "./CategoryButton.module.css";
import { useRouter } from "next/router";

interface Props {
  id: number | "all";
  onClick: Dispatch<SetStateAction<string>>;
  children: ReactNode;
}

function CategoryButton({ id, onClick, children }: Props) {
  const router = useRouter();
  const folderID = useFolderId();
  const setFolderId = useSetFolderId();

  const handleLoadClick = () => {
    onClick(String(children));
    setFolderId(id);
    router.push(`/folder/${id}`);
  };

  const buttonClasses = `${styles.categoryButton} ${
    folderID === id ? styles.selected : ""
  }`;

  return (
    <button
      className={buttonClasses}
      onClick={handleLoadClick}
      disabled={folderID === id}
    >
      {children}
    </button>
  );
}

export default CategoryButton;
