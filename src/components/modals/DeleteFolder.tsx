import styles from './Modal.module.css';
import Button from '@/components/Button';

interface Props {
  folderName: string;
}

function DeleteFolder({ folderName }: Props) {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>폴더 삭제</h1>
        <p className={styles.description}>{folderName}</p>
      </div>
      <Button size='lg' color='bg-red'>
        삭제하기
      </Button>
    </>
  );
}

export default DeleteFolder;
