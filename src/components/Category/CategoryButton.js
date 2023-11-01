import styles from "./CategoryButton.module.css";

const CategoryButton = ({ id, currentFolder, selectedCategoryId, onClick, children }) => {
  const handleLoadClick = () => {
    currentFolder(children);
    onClick(id);
  };

  const buttonClasses = `${styles.categoryButton} ${
    selectedCategoryId === id ? styles.selected : selectedCategoryId === null ? styles.selected : ""
  }`;

  return (
    <button className={buttonClasses} onClick={handleLoadClick}>
      {children}
    </button>
  );
};

export default CategoryButton;
