import styles from "./Category.module.css";
import CategoryList from "./CategoryList";

const Category = ({ folderListData, currentFolder, selectedCategoryId, onclick }) => {
  return (
    <div className={styles.Category}>
      <CategoryList
        folderListData={folderListData}
        currentFolder={currentFolder}
        selectedCategoryId={selectedCategoryId}
        onclick={onclick}
      />
    </div>
  );
};

export default Category;
