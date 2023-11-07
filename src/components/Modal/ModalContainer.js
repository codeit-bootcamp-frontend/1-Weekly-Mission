import styles from "./ModalContainer.module.css";
import closeIcon from "../../assets/close.svg";

function ModalContainer({ onClose, children }) {
  const handleOutSideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalContainer} onClick={handleOutSideClick}>
      <div className={styles.modal}>
        {children}
        <img className={styles.icon} src={closeIcon} alt="close" onClick={onClose} />
      </div>
    </div>
  );
}

export default ModalContainer;
