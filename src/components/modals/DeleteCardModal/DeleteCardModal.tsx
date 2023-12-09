import { CardInterface } from "@/types";
import styles from "./DeleteCardModal.module.scss";

function DeleteCardModal({ card }: { card: CardInterface }) {
  return (
    <div className={styles["modal-content"]}>
      <h2 className={styles["modal-title"]}>링크 삭제</h2>
      <p className={styles["modal-desc"]}>{card.url}</p>
      <button className={styles["modal-button"]}>삭제하기</button>
    </div>
  );
}

export default DeleteCardModal;
