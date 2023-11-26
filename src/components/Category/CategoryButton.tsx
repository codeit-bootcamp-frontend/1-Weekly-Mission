import { ReactNode, Dispatch, SetStateAction } from "react";
import { useFolderId, useSetFolderId } from "../../contexts/UserContext";
import styles from "./CategoryButton.module.css";

interface Props {
  id: number | null;
  currentFolder: Dispatch<SetStateAction<string>>;
  children: ReactNode;
}

const CategoryButton = ({ id, currentFolder, children }: Props) => {
  const folderID = useFolderId();
  const setFolderId = useSetFolderId();

  const handleLoadClick = () => {
    currentFolder(String(children));
    setFolderId(id);
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
