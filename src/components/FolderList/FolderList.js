import FolderAddButton from 'components/FolderAddButton/FolderAddButton';
import FolderForm from 'components/FolderForm/FolderForm';
import styles from './FolderList.module.css';

function FolderList({ folderData }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.folderWrapper}>
        {folderData.map((data) => (
          <FolderForm key={data.id} data={data} />
        ))}
      </div>
      <FolderAddButton />
    </div>
  );
}

export default FolderList;
