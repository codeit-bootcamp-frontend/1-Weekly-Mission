import styles from '../styles/FolderInfo.module.css';

function FolderInfo({ folderData }) {
  if (folderData && folderData.folder) {
    const { folder } = folderData;
    const { owner } = folder;

    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <div className={styles.profileImageContainer}>
            <img
              className={styles.profileImage}
              src={owner.profileImageSource}
              alt='프로필 이미지'
            />
          </div>
          <div className={styles.name}>{owner.name}</div>
          <h3 className={styles.title}>{folder.name}</h3>
        </div>
      </div>
    );
  }
}

export default FolderInfo;
