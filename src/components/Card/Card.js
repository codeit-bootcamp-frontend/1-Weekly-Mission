import styles from "./Card.module.css";

const Card = ({ children }) => {
  return (
    <div className={styles.card}>
      <ul className={styles.list}>{children}</ul>
    </div>
  );
};

export default Card;
