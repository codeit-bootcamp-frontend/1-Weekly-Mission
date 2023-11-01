import styles from "./CategoryListSkeleton.module.css";

const CategoryListSkeleton = ({ size }) => {
  return (
    <div className={styles.CategoryListSkeleton}>
      <div className={styles.container}>
        <ul className={styles.category_container}>
          {Array(size)
            .fill()
            .map((_, index) => (
              <li key={index}>
                <div className={styles.CategoryButtonSkeleton}></div>
              </li>
            ))}
        </ul>
        <div className={styles.right_container}>
          <div className={styles.CategoryButtonSkeleton}></div>
        </div>
      </div>
    </div>
  );
};

export default CategoryListSkeleton;
