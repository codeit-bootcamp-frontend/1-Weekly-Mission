import styles from './AddLinkInput.module.css';
import linkIcon from '../../assets/images/link.svg';
import Button from '../Button/Button';

function AddLinkInput({ onChange, value, onClick }) {
  return (
    <header className={styles.root}>
      <form className={styles.form} onSubmit={onClick}>
        <div className={styles.container}>
          <img src={linkIcon} alt="" />
          <input
            onChange={onChange}
            id="search"
            value={value}
            className={styles.input}
            placeholder="링크를 추가해 보세요"
          ></input>
          <Button className={styles.button} onClick={onClick}>
            추가하기
          </Button>
        </div>
      </form>
    </header>
  );
}

export default AddLinkInput;
