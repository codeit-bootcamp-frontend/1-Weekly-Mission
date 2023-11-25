import styles from "./ShareFolderModal.module.scss";
import { ReactComponent as KakaoIcon } from "src/assets/images/kakao-icon.svg";
import { ReactComponent as FacebookIcon } from "src/assets/images/facebook-icon.svg";
import { ReactComponent as LinkIcon } from "src/assets/images/link-modal-icon.svg";
import { FolderInterface } from "src/types";

interface Props {
  folder: FolderInterface;
}

function ShareFolderModal({ folder }: Props) {
  const handleLinkButton = () => {
    let url = "https://bootcamp-api.codeit.kr/shared";
    let query = `?user=1&folder=${folder.id}`;
    url = `${url}${query}`;
    navigator.clipboard.writeText(url);
  };

  return (
    <div className={styles["modal-content"]}>
      <h2 className={styles["modal-title"]}>폴더 공유</h2>
      <p className={styles["modal-desc"]}>{folder.name}</p>
      <div className={styles["sns-group"]}>
        <button className={styles["sns-button"]}>
          <KakaoIcon />
          <p>카카오톡</p>
        </button>
        <button className={styles["sns-button"]}>
          <FacebookIcon />
          <p>페이스북</p>
        </button>
        <button className={styles["sns-button"]} onClick={handleLinkButton}>
          <LinkIcon />
          <p>링크 복사</p>
        </button>
      </div>
    </div>
  );
}

export default ShareFolderModal;
