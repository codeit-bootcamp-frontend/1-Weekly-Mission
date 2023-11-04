import styles from './AddFolder.module.css';
import ModalHeader from '../components/ModalHeader/ModalHeader';
import InputBox from '../components/InputBox/InputBox';
import Button from '../components/Button/Button';

function EditFolder({ onChange, folderName, value }) {
  return (
    <>
      <ModalHeader title="폴더 이름 변경"></ModalHeader>
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
          <Button>변경하기</Button>
        </form>
      </div>
    </>
  );
}

export default EditFolder;
