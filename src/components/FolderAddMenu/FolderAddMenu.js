import addIcon from '../../assets/images/add.svg';
import styles from './FolderAddMenu.module.css';

function FolderAddMenu() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <button className={styles.root} type="button" onClick={handleSubmit}>
      추가하기 <img src={addIcon} alt="" />
    </button>
  );
}

export default FolderAddMenu;
