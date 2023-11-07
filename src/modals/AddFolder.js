import styles from './AddFolder.module.css';
import ModalHeader from '../components/ModalHeader/ModalHeader';
import InputBox from '../components/InputBox/InputBox';
import Button from '../components/Button/Button';

function AddFolder({ onChange, value }) {
  return (
    <>
      <ModalHeader title="폴더 추가"></ModalHeader>
      <div className={styles.body}>
        <form className={styles.form} onSubmit="" noValidate>
          <InputBox>
            <input
              value={value}
              className={styles.input}
              placeholder="내용 입력"
              onChange={onChange}
            />
          </InputBox>
          <Button>추가하기</Button>
        </form>
      </div>
    </>
  );
}

export default AddFolder;
