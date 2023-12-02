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
        <div className={styles.ownerImage}>
          <Image fill className={styles.image} src={profileImage} alt="profile" />
        </div>
        <div className={styles.ownerName}>@{userName}</div>
        <h2 className={styles.folderName}>{folderName}</h2>
      </div>
    </header>
  );
}

export default BinderInfo;
