import { CardInterface } from "src/types";
import styles from "./DeleteCardModal.module.scss";

interface Props {
  card: CardInterface;
}
function DeleteCardModal({ card }: Props) {
  return (
    <div className={styles["modal-content"]}>
      <h2 className={styles["modal-title"]}>링크 삭제</h2>
      <p className={styles["modal-desc"]}>{card.url}</p>
      <button className={styles["modal-button"]}>삭제하기</button>
    </div>
  );
}

export default DeleteCardModal;
