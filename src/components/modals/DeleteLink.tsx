import styles from './Modal.module.css';
import Button from '@/components/Button';

interface Props {
  url: string;
}

function DeleteLink({ url }: Props) {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>링크 삭제</h1>
        <p className={styles.description}>{url}</p>
      </div>
      <Button size='lg' color='bg-red'>
        삭제하기
      </Button>
    </>
  );
}

export default DeleteLink;
