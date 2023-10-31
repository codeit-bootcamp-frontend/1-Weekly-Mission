import styles from "../styles/CategoryButton.module.css";

const CategoryButton = ({ id, currentFolder, selectedCategoryId, onclick, children }) => {
  const handleLoadClick = () => {
    currentFolder(children);
    onclick(id);
  };

  const buttonClasses = `${styles.CategoryButton} ${
    selectedCategoryId === id ? styles.selected : selectedCategoryId === null ? styles.selected : ""
  }`;

  return (
    <button className={buttonClasses} onClick={handleLoadClick}>
      {children}
    </button>
  );
};

export default CategoryButton;
