import FolderAddButton from 'components/FolderAddButton/FolderAddButton';
import FolderForm from 'components/FolderForm/FolderForm';
import { useNavigate } from 'react-router-dom';
import styles from './FolderList.module.css';

function FolderList({ folder }) {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.folderWrapper}>
        <FolderForm name={'전체'} onClick={() => navigate('/folder')} />
        {folder.map((data) => (
          <FolderForm key={data.id} name={data.name} onClick={() => navigate(`/folder?folderId=${data.id}`)} />
        ))}
      </div>
      <FolderAddButton />
    </div>
  );
}

export default FolderList;
