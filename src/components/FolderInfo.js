import styles from './FolderInfo.module.css';

function FolderInfo({ folderInfo }) {
  const { folder } = folderInfo;
  const folderName = folder?.name;
  const owner = folder?.owner;
  const ownerName = owner?.name;
  const ownerImg = owner?.profileImageSource;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img className={styles.image} src={ownerImg} alt="폴더 이미지" />
        <div className={styles.user}>@{ownerName}</div>
        <div className={styles.name}>{folderName}</div>
      </div>
    </div>
  );
}
export default FolderInfo;