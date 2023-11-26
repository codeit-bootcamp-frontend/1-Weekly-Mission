import styles from "./FolderInfo.module.css";

interface Props {
  profileImage: string;
  userName: string;
  folderName: string;
}

const FolderInfo = ({ profileImage, userName, folderName }: Props) => {
  return (
    <div className={styles.folderInfo}>
      <div className={styles.profileInfo}>
        <img
          className={styles.profileImg}
          src={profileImage}
          alt={profileImage && "프로필 이미지"}
          width="60"
          height="60"
        />
        <p className={styles.ownerName}>@{userName}</p>
      </div>
      <h1 className={styles.folderName}>{folderName}</h1>
    </div>
  );
};

export default FolderInfo;
