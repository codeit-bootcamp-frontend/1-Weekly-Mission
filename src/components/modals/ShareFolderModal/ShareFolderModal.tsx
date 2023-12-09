import styles from "./ShareFolderModal.module.scss";
import Image from "next/image";
import { FolderInterface } from "@/types";

function ShareFolderModal({ folder }: { folder: FolderInterface }) {
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
          <Image
            src="icons/kakao-icon.svg"
            alt="카카오"
            width={42}
            height={42}
          />
          <p>카카오톡</p>
        </button>
        <button className={styles["sns-button"]}>
          <Image
            src="icons/facebook-icon.svg"
            alt="페이스북 공유"
            width={42}
            height={42}
          />
          <p>페이스북</p>
        </button>
        <button className={styles["sns-button"]} onClick={handleLinkButton}>
          <Image
            src="icons/link-icon.svg"
            alt="링크 공유"
            width={42}
            height={42}
          />
          <p>링크 복사</p>
        </button>
      </div>
    </div>
  );
}

export default ShareFolderModal;
