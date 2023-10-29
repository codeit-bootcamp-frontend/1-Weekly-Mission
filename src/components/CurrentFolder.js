import styles from "../styles/CurrentFolder.module.css";

const CurrentFolder = ({ children }) => {
  return <h2 className={styles.CurrentFolder}>{children}</h2>;
};

export default CurrentFolder;
