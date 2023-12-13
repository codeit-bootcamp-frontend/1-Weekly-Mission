import styles from "./Category.module.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Category({ children }: Props) {
  return <div className={styles.category}>{children}</div>;
}

export default Category;
