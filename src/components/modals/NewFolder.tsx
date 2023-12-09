import styles from './Modal.module.css';
import Button from '@/components/Button';

function NewFolder() {
  return (
    <>
      <h1 className={styles.title}>폴더 추가</h1>
      <div>
        <input placeholder='내용 입력' className={styles.input}></input>
        <Button size='lg'>추가하기</Button>
      </div>
    </>
  );
}

export default NewFolder;
