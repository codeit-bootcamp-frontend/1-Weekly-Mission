import styles from "./AddLink.module.css";

const AddLink = ({ children }) => {
  return <div className={styles.addLink}>{children}</div>;
};

export default AddLink;
