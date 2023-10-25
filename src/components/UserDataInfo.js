import styles from '../styles/UserDataInfo.Module.css';

function UserDataInfo({ UserData }) {
  const { name, email, profileImageSource } = UserData;

  return (
    <div className={styles.Container}>
      <img
        className={styles.profileImage}
        src={profileImageSource}
        alt={name}
      />
      <span className={styles.profileEmail}>{email}</span>
    </div>
  );
}

export default UserDataInfo;
