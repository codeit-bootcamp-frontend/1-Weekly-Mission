/* 각 링크를 카드로 보여주는 컴포넌트 */

/* BEM 방식으로 clasSName 명명 
   css 모듈 방식 적용 
   */

import styles from "./Card.module.css";

import noImage from "../../assets/no-img-card.svg";
import kebab from "../../assets/kebab.svg";
import noStar from "../../assets/no-filled-star-icon.svg";

import formatDate from "../../utils/formatDate";
import calcDate from "../../utils/calcDate";

function Card(card) {
  const { created_at, url, title, description, image_source } = card.card;
  const str = calcDate(created_at);

  return (
    <div className={styles["card-container"]}>
      <button className={styles["unfilled-star-button"]}>
        <img src={noStar} alt="not checked star" />
      </button>
      <button className={styles["kebab-button"]}>
        <img src={kebab} alt="kebab icon" />
      </button>

      <a
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        className={styles["card-link"]}
      >
        <div className={styles["card-img-section"]}>
          <img src={image_source ? image_source : noImage} alt={title} />
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
