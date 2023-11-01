import styles from "./CategoryList.module.css";
import CategoryButton from "./CategoryButton";
import plus from "../../assets/plus.svg";

const CategoryList = ({ folderListData, currentFolder, selectedCategoryId, onClick }) => {
  if (!folderListData || !folderListData.data) return;

  const folderListDataArray = folderListData.data.sort((a, b) => a.id - b.id);

  return (
    <div className={styles.categoryList}>
      <ul className={styles.list}>
        <li>
          <CategoryButton id="" currentFolder={currentFolder} selectedCategoryId={selectedCategoryId} onClick={onClick}>
            전체
          </CategoryButton>
        </li>
        {folderListDataArray.map((item) => (
          <li key={item.id}>
            <CategoryButton
              id={item.id}
              currentFolder={currentFolder}
              selectedCategoryId={selectedCategoryId}
              onClick={onClick}
            >
              {item.name}
            </CategoryButton>
          </li>
        ))}
      </ul>
      <div className={styles.container}>
        <button className={styles.addFolderButton}>폴더 추가</button>
        <img className={styles.plusImg} src={plus} alt="더하기 이미지" />
      </div>
    </div>
  );
};

export default CategoryList;
