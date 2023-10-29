import styles from "./Card.module.css";

export default function Card({ onClickFunc, children }) {
  return (
    <div className={styles.container} onClick={onClickFunc}>
      {children}
    </div>
  );
}
