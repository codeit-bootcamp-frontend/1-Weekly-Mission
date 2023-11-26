import styles from "./Card.module.scss";
import NoImg from "src/assets/icons/no-img-card.svg";
import StarButton from "../StarButton/StarButton";
import formatDate from "src/commons/utils/formatDate";
import calcDate from "src/commons/utils/calcDate";
import KebabButton from "../KebabButton/KebabButton";
import { CardProps, ModalInterface } from "src/types";

interface Props extends CardProps {
  onClick?: (m: ModalInterface) => void;
}

function Card({ card, onClick }: Props) {
  const str = calcDate(String(card.created_at || card.createdAt));
  return (
    <>
      <div className={styles["card-container"]}>
        {onClick && (
          <>
            <StarButton card={card} />
            <KebabButton card={card} onClick={onClick} />
          </>
        )}
        <a
          href={card.url}
          target="_blank"
          rel="noreferrer noopener"
          className={styles["card-link"]}
        >
          <div className={styles["card-img-section"]}>
            <img
              src={card.image_source || card.imageSource || NoImg}
              alt={card.title}
            />
          </div>
          <div className={styles["card-text-section"]}>
            <p className={styles["time-stamp"]}>{str}</p>
            <p className={styles["introduce-text"]}>{card.description}</p>
            <p className={styles["created-date"]}>
              {formatDate(String(card.created_at || card.createdAt))}
            </p>
          </div>
        </a>
      </div>
    </>
  );
}

export default Card;
