import shareIcon from '../../assets/images/share.svg';
import penIcon from '../../assets/images/pen.svg';
import binIcon from '../../assets/images/bin.svg';
import styles from './FolderEdit.module.css';

function FolderEdit() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.root}>
      <button className={styles.button} onSubmit={handleSubmit}>
        <img src={shareIcon} alt="" />
        공유
      </button>
      <button className={styles.button} onSubmit={handleSubmit}>
        <img src={penIcon} alt="" />
        이름 변경
      </button>
      <button className={styles.button} onSubmit={handleSubmit}>
        <img src={binIcon} alt="" />
        삭제
      </button>
    </div>
  );
}

export default FolderEdit;
