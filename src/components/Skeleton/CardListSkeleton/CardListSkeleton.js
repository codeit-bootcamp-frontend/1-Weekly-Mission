import styles from "./CardListSkeleton.module.css";

const CardListSkeleton = ({ size }) => {
  return (
    <div className={styles.cardListSkeleton}>
      <ul className={styles.container}>
        {Array.from({ length: size }, (_, index) => (
          <li key={index}>
            <div className={styles.cardItemSkeleton}>
              <div className={styles.imgContainer}></div>
              <div className={styles.contentContainer}>
                <div className={styles.timeDiff}></div>
                <div className={styles.description}></div>
                <div className={styles.createdAt}></div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardListSkeleton;
