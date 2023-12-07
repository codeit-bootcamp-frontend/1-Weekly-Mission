import { ReactNode, Dispatch, SetStateAction } from "react";
import {
  useFolderId,
  useSetFolderId,
  useUserId,
} from "../../contexts/UserContext";
import styles from "./CategoryButton.module.css";
import { useRouter } from "next/router";

interface Props {
  id: number | "all";
  currentFolder: Dispatch<SetStateAction<string>>;
  children: ReactNode;
}

const CategoryButton = ({ id, currentFolder, children }: Props) => {
  const router = useRouter();
  const folderID = useFolderId();
  const userId = useUserId();
  const setFolderId = useSetFolderId();

  const handleLoadClick = () => {
    currentFolder(String(children));
    setFolderId(id);
    router.push(`?user=${userId}&folder=${id}`);
  };

  const buttonClasses = `${styles.categoryButton} ${
    folderID === id ? styles.selected : ""
  }`;

  return (
    <button className={buttonClasses} onClick={handleLoadClick}>
      {children}
    </button>
  );
};

export default CategoryButton;
