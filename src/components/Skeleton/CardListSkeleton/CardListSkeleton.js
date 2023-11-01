import styles from "./CardListSkeleton.module.css";

const CardListSkeleton = ({ size }) => {
  return (
    <div className={styles.CardListSkeleton}>
      <ul className={styles.container}>
        {Array(size)
          .fill()
          .map((_, index) => (
            <li key={index}>
              <div className={styles.CardItemSkeleton}>
                <div className={styles.img_container}></div>
                <div className={styles.content_container}>
                  <div className={styles.time_diff}></div>
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
