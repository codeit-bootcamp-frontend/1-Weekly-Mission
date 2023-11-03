/* 각 링크를 카드로 보여주는 컴포넌트 */

import styles from "./Card.module.css";
import NoImg from "assets/images/no-img-card.svg";
import StarButton from "../StarButton/StarButton";
import formatDate from "commons/utils/formatDate";
import calcDate from "commons/utils/calcDate";
import KebabButton from "../KebabButton/KebabButton";

function Card(card) {
  const { created_at, url, title, description, image_source } = card.card;
  const str = calcDate(created_at);

  return (
    <div className={styles["card-container"]}>
      <StarButton />
      <KebabButton />

      <a
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        className={styles["card-link"]}
      >
        <div className={styles["card-img-section"]}>
          <img src={image_source ? image_source : NoImg} alt={title} />
        </div>
        <div className={styles["card-text-section"]}>
          <p className={styles["time-stamp"]}>{str}</p>
          <p className={styles["introduce-text"]}>{description}</p>
          <p className={styles["created-date"]}>{formatDate(created_at)}</p>
        </div>
      </a>
    </div>
  );
}

export default Card;
