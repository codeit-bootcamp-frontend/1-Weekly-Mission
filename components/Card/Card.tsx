import { ReactNode } from "react";

import styles from "./Card.module.css";

interface Props {
  children: ReactNode;
}

function Card({ children }: Props) {
  return (
    <div className={styles.card}>
      <ul className={styles.list}>{children}</ul>
    </div>
  );
}

export default Card;
