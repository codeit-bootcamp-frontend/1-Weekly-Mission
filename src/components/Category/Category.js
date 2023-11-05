import styles from "./Category.module.css";

const Category = ({ children }) => {
  return <div className={styles.category}>{children}</div>;
};

export default Category;
