import styles from "./ProfileInfo.module.css";

const ProfileInfo = ({ profileImageSource, email }) => {
  return (
    <div className={styles.ProfileInfo}>
      <img className={styles.profile_img} src={profileImageSource} alt="프로필 아이콘" />
      <span className={styles.email}>{email}</span>
    </div>
  );
};
export default ProfileInfo;
