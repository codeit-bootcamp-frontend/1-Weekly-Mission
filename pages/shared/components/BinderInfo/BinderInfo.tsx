import Image from "next/image";
import styles from "./BinderInfo.module.css";

interface Props {
  folderName: string;
  userName: string;
  profileImage: string;
}

function BinderInfo({ folderName, userName, profileImage }: Props) {
  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <Image width={60} height={60} className={styles.ownerImage} src={profileImage} alt="profile" />

        <div className={styles.ownerName}>@{userName}</div>
        <h2 className={styles.folderName}>{folderName}</h2>
      </div>
    </header>
  );
}

export default BinderInfo;
