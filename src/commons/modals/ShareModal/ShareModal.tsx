import styles from "./ShareModal.module.scss";
import { ReactComponent as KakaoIcon } from "../../../assets/images/kakao-icon.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/images/facebook-icon.svg";
import { ReactComponent as LinkIcon } from "../../../assets/images/link-modal-icon.svg";

function ShareModal({ title = "", id = "" }) {
  const handleLinkButton = () => {
    let url = "https://bootcamp-api.codeit.kr/shared";
    let query = `?user=1&folder=${id}`;
    url = `${url}${query}`;
    navigator.clipboard.writeText(url);
  };

  return (
    <div className={styles["modal-content"]}>
      <h2 className={styles["modal-title"]}>폴더 공유</h2>
      <p className={styles["modal-desc"]}>{title}</p>
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

export default ShareModal;
