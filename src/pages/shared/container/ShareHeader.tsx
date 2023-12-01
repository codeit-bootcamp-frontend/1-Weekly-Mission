import { SharedProps } from "@/types";
import styles from "./ShareHeader.module.scss";

function ShareHeader({ sharedUser, sharedFolder }: SharedProps) {
  if (!sharedUser || !sharedFolder) {
    return <header>공유 받은 폴더가 없습니다!</header>;
  }
  return (
    <header className={styles["header"]}>
      <div className={styles["user-section"]}>
        <div>
          <img
            src={sharedUser.profileImageSource}
            alt="profile"
            className={styles["folder-profile-img"]}
          />
        </div>
        <div className={styles["folder-user-name"]}>{sharedUser.name}</div>
        <div className={styles["folder-name"]}>{sharedFolder?.folder.name}</div>
      </div>
    </header>
  );
}

export default ShareHeader;
