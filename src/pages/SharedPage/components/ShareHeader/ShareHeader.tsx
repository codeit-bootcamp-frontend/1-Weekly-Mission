/* 특정 폴더로 들어갔을 때 폴더 명, 사용자 이름, 사용자 프로필을 보여주는 폴더 타이틀 컴포넌트 */

/* css 모듈 방식 적용 
   SharedPage 에 접속할 때 보여주는 header
   */

import styles from "./ShareHeader.module.css";

interface HeaderProps {
  folderOwnerProfile: string;
  folderName: string;
  folderOwnerName: string;
}
function ShareHeader({
  folderOwnerProfile,
  folderName,
  folderOwnerName,
}: HeaderProps) {
  if (!folderOwnerName) {
    return <header>폴더를 만들어주세요.</header>;
  }
  return (
    <header>
      <div className={styles["user-section"]}>
        {/* 프사 */}
        <div>
          <img
            src={folderOwnerProfile}
            alt="profile"
            className={styles["folder-profile-img"]}
          />
        </div>
        {/* 이름 */}
        <div className={styles["folder-user-name"]}>{folderOwnerName}</div>
        {/* 즐겨찾기 */}
        <div className={styles["folder-name"]}>{folderName}</div>
      </div>
    </header>
  );
}

export default ShareHeader;
