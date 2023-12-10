/*ShareHeader 컴포넌트:
  shared 페이지에서 누가 어떤 폴더를 공유해주었는지 보여주는 header 컴포넌트.

  sharedUser: 공유를 해준 사람의 정보
  sharedFolder: 공유받은 폴더
*/

import { SharedFolderInterface, SharedUserInterface } from "@/types";
import styles from "./ShareHeader.module.scss";

function ShareHeader({
  sharedUser,
  sharedFolder,
}: {
  sharedFolder?: SharedFolderInterface;
  sharedUser?: SharedUserInterface;
}) {
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
