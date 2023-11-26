import styles from "./Category.module.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Category = ({ children }: Props) => {
  return <div className={styles.category}>{children}</div>;
};

export default Category;
