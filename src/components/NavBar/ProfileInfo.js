import styles from "./ProfileInfo.module.css";

const ProfileInfo = ({ profileImageSource, email }) => {
  return (
    <div className={styles.profileInfo}>
      <img className={styles.profileImg} src={profileImageSource} alt="프로필 아이콘" />
      <span className={styles.email}>{email}</span>
    </div>
  );
};
export default ProfileInfo;
