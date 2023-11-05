import styles from "./CategoryList.module.css";
import CategoryButton from "./CategoryButton";

const CategoryList = ({ folderListData, currentFolder, children }) => {
  if (!folderListData || !folderListData.data) return;

  const folderListDataArray = folderListData.data.sort((a, b) => a.id - b.id);

  return (
    <div className={styles.categoryList}>
      <ul className={styles.list}>
        <li>
          <CategoryButton id="" currentFolder={currentFolder}>
            전체
          </CategoryButton>
        </li>
        {folderListDataArray.map((item) => (
          <li key={item.id}>
            <CategoryButton id={item.id} currentFolder={currentFolder}>
              {item.name}
            </CategoryButton>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
};

export default CategoryList;
