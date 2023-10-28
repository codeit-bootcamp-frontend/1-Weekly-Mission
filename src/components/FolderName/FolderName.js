import styles from './FolderName.module.css';

function FolderName({ children }) {
  return <h2 className={styles.root}>{children}</h2>;
}

export default FolderName;
