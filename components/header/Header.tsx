import styles from "./header.module.css";
import { FolderInfo } from "../../types/types";
import Image from "next/image";

interface FolderInfoProps {
  folderInfo: FolderInfo | undefined;
}

export default function Header({ folderInfo }: FolderInfoProps) {
  return (
    <header className={styles.header}>
      <div className={styles.userInfoBox}>
        <Image
          src={folderInfo?.folder.owner.profileImageSource}
          alt="profile"
          className={styles.profileImage}
          width={24}
          height={24}
        />
        <span className={styles.userName}>{folderInfo?.folder.owner.name}</span>
      </div>
      <span className={styles.folderName}>{folderInfo?.folder.name}</span>
    </header>
  );
}
