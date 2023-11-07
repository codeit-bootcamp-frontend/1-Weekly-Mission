import styles from './ModalHeader.module.css';

function ModalHeader({ title, subTitle }) {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subTitle}>{subTitle}</p>
    </div>
  );
}

export default ModalHeader;
