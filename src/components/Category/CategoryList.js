import styles from "./CategoryList.module.css";
import CategoryButton from "./CategoryButton";
import plus from "../../assets/plus.svg";
import CategoryButtonSkeleton from "./CategoryButtonSkeleton";

const CategoryList = ({ folderListData, currentFolder, isLoading, selectedCategoryId, onclick }) => {
  if (isLoading) {
    return (
      <div className={styles.CategoryList}>
        <ul className={styles.list}>
          {Array(6)
            .fill()
            .map((_, index) => (
              <li key={index}>
                <CategoryButtonSkeleton />
              </li>
            ))}
        </ul>
        <div className={styles.container}>
          <CategoryButtonSkeleton />
        </div>
      </div>
    );
  }

  if (!folderListData || !folderListData.data) return;

  const folderListDataArray = folderListData.data.sort((a, b) => a.id - b.id);

  return (
    <div className={styles.CategoryList}>
      <ul className={styles.list}>
        <li>
          <CategoryButton id="" currentFolder={currentFolder} selectedCategoryId={selectedCategoryId} onclick={onclick}>
            전체
          </CategoryButton>
        </li>
        {folderListDataArray.map((item) => (
          <li key={item.id}>
            <CategoryButton
              id={item.id}
              currentFolder={currentFolder}
              selectedCategoryId={selectedCategoryId}
              onclick={onclick}
            >
              {item.name}
            </CategoryButton>
          </li>
        ))}
      </ul>
      <div className={styles.container}>
        <button className={styles.add_folder_button}>폴더 추가</button>
        <img className={styles.plus_img} src={plus} alt="더하기 이미지" />
      </div>
    </div>
  );
};

export default CategoryList;
