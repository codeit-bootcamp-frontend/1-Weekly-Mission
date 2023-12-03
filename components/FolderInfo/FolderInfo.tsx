import Image from "next/image";
import styles from "./FolderInfo.module.css";

import emptyImg from "@/assets/images/emptyImg.svg";

interface Props {
  profileImage?: string;
  userName?: string;
  folderName?: string;
}

const FolderInfo = ({ profileImage, userName, folderName }: Props) => {
  return (
    <div className={styles.folderInfo}>
      <div className={styles.profileInfo}>
        <Image
          className={styles.profileImg}
          src={profileImage ?? emptyImg}
          alt={"프로필 이미지"}
          width="60"
          height="60"
        />
        <p className={styles.ownerName}>@{userName ?? "test"}</p>
      </div>
      <h1 className={styles.folderName}>{folderName}</h1>
    </div>
  );
};

export default FolderInfo;
