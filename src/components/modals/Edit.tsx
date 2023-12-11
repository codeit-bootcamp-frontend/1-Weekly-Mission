import styles from './Modal.module.css';
import Button from '@/components/Button';

function Edit() {
  return (
    <>
      <h1 className={styles.title}>폴더 이름 변경</h1>
      <div>
        <input className={styles.input} placeholder='유용한 팁'></input>
        <Button size='lg'>변경하기</Button>
      </div>
    </>
  );
}

export default Edit;
