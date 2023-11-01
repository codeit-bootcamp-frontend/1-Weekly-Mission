import styles from "./NotFoundLink.module.css";

const NotFoundLink = () => {
  return (
    <div className={styles.NotFoundLink}>
      <p className={styles.description}>저장된 링크가 없습니다.</p>
    </div>
  );
};

export default NotFoundLink;
