import styles from "../styles/Category.module.css";
import CategoryList from "./CategoryList";

const Category = ({ folderListData, currentFolder, isLoading, selectedCategoryId, onclick }) => {
  return (
    <div className={styles.Category}>
      <CategoryList
        folderListData={folderListData}
        currentFolder={currentFolder}
        isLoading={isLoading}
        selectedCategoryId={selectedCategoryId}
        onclick={onclick}
      />
    </div>
  );
};

export default Category;
