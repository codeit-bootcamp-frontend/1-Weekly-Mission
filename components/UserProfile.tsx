import { UserRawData } from '@/pages/api/type';
import styles from '@/styles/userProfile.module.css';

function UserProfile({ userProfile }: any): JSX.Element {
  const userProfileImage = userProfile?.image_source;
  const userEmail = userProfile?.email;

  return (
    <>
      <div className={styles.user_profile}>
        <img className={styles.user_profile_image} src={userProfileImage} alt="유저 프로필 이미지" />
        <p className={styles.user_profile_email}>{userEmail}</p>
      </div>
    </>
  );
}

export default UserProfile;
