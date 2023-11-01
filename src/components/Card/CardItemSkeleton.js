import styles from "./CardItemSkeleton.module.css";

const CardItemSkeleton = () => {
  return (
    <div className={styles.CardItemSkeleton}>
      <div className={styles.img_container}></div>
      <div className={styles.container}>
        <div className={styles.time_diff}></div>
        <div className={styles.description}></div>
        <div className={styles.createdAt}></div>
      </div>
    </div>
  );
};

export default CardItemSkeleton;
