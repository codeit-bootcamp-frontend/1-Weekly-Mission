import { useFolderId, useSetFolderId } from "../../contexts/UserContext";
import styles from "./CategoryButton.module.css";

const CategoryButton = ({ id, currentFolder, children }) => {
  const folderID = useFolderId();
  const setFolderId = useSetFolderId();
  const handleLoadClick = () => {
    currentFolder(children);
    setFolderId(id);
  };

  const buttonClasses = `${styles.categoryButton} ${
    folderID === id ? styles.selected : folderID === null ? styles.selected : ""
  }`;

  return (
    <button className={buttonClasses} onClick={handleLoadClick}>
      {children}
    </button>
  );
};

export default CategoryButton;
