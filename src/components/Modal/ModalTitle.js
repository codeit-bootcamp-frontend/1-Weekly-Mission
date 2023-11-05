import styles from "./ModalTitle.module.css";

const ModalTitle = ({ children }) => {
  return <h1 className={styles.modalTitle}>{children}</h1>;
};

export default ModalTitle;
