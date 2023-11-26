import styles from "./ProfileInfo.module.css";

interface Props {
  profileImage: string;
  email: string;
}

const ProfileInfo = ({ profileImage, email }: Props) => {
  return (
    <div className={styles.profileInfo}>
      <img
        className={styles.profileImg}
        src={profileImage}
        alt="프로필 아이콘"
      />
      <span className={styles.email}>{email}</span>
    </div>
  );
};
export default ProfileInfo;
