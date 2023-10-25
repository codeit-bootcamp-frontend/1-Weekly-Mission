import styles from "../styles/FolderInfo.module.css";

const FolderInfo = ({ folderData }) => {
  if (folderData && folderData.folder) {
    const { folder } = folderData;
    const { owner } = folder;

    return (
      <div className={styles.FolderInfo}>
        <div className={styles.profile_info}>
          <img className={styles.profile_img} src={owner.profileImageSource} alt="프로필 이미지" />
          <p className={styles.owner_name}>@{owner.name}</p>
        </div>
        <h1 className={styles.folder_name}>{folder.name}</h1>
      </div>
    );
  }
};

export default FolderInfo;
