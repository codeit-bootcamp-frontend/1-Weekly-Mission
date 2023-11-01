import styles from "./CategoryListSkeleton.module.css";

const CategoryListSkeleton = ({ size }) => {
  return (
    <div className={styles.categoryListSkeleton}>
      <div className={styles.container}>
        <ul className={styles.categoryContainer}>
          {Array(size)
            .fill()
            .map((_, index) => (
              <li key={index}>
                <div className={styles.categoryButtonSkeleton}></div>
              </li>
            ))}
        </ul>
        <div className={styles.rightContainer}>
          <div className={styles.categoryButtonSkeleton}></div>
        </div>
      </div>
    </div>
  );
};

export default CategoryListSkeleton;
