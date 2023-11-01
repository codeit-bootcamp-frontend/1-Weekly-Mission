import addIcon from '../../assets/images/add.svg';
import styles from './FolderAddMenu.module.css';

function FolderAddMenu() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <button className={styles.root} type="button" onClick={handleSubmit}>
      폴더 추가 <img src={addIcon} alt="" />
    </button>
  );
}

export default FolderAddMenu;
