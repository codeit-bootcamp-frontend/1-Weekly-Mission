import styles from './Modal.module.css';
import closeIcon from '../assets/images/closeIcon.svg';

function Modal({ children, onClick }) {
  return (
    <div className={styles.root}>
      <div className={styles.relative}>
        <button onClick={onClick} type="button" className={styles.button}>
          <img src={closeIcon} alt="" />
        </button>
        <div className={styles.container}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
