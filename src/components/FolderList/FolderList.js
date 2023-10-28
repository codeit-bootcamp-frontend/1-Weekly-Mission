import FolderAddButton from 'components/FolderAddButton/FolderAddButton';
import FolderForm from 'components/FolderForm/FolderForm';
import styles from './FolderList.module.css';

function FolderList({ folderData }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.folderWrapper}>
        <FolderForm name={'전체'} href="/folder" />
        {folderData.map((data) => (
          <FolderForm key={data.id} name={data.name} href={`/folder?folderId=${data.id}`} />
        ))}
      </div>
      <FolderAddButton />
    </div>
  );
}

export default FolderList;
