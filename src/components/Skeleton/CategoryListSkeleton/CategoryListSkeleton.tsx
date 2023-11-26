import styles from "./CategoryListSkeleton.module.css";

interface Props {
  size: number;
}

const CategoryListSkeleton = ({ size }: Props) => {
  return (
    <div className={styles.categoryListSkeleton}>
      <div className={styles.container}>
        <ul className={styles.categoryContainer}>
          {Array.from({ length: size }, (_, index) => (
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
