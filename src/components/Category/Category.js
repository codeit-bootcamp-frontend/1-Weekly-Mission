import styles from "./Category.module.css";
import CategoryList from "./CategoryList";

const Category = ({ folderListData, currentFolder, selectedCategoryId, onClick }) => {
  return (
    <div className={styles.category}>
      <CategoryList
        folderListData={folderListData}
        currentFolder={currentFolder}
        selectedCategoryId={selectedCategoryId}
        onClick={onClick}
      />
    </div>
  );
};

export default Category;
