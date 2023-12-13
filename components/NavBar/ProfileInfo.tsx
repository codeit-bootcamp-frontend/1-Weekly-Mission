import Image from "next/image";
import styles from "./ProfileInfo.module.css";

interface Props {
  profileImage: string;
  email: string;
}

function ProfileInfo({ profileImage, email }: Props) {
  return (
    <div className={styles.profileInfo}>
      <div className={styles.profileImgWrapper}>
        <Image
          className={styles.profileImg}
          src={profileImage}
          width={28}
          height={28}
          alt="프로필 아이콘"
        />
      </div>
      <span className={styles.email}>{email}</span>
    </div>
  );
}

export default ProfileInfo;
