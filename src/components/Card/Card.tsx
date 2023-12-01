import styles from "./Card.module.scss";
import StarButton from "../StarButton/StarButton";
import formatDate from "@/utils/formatDate";
import calcDate from "@/utils/calcDate";
import KebabButton from "../KebabButton/KebabButton";
import { CardProps, FolderInterface, ModalInterface } from "@/types";

interface Props extends CardProps {
  onClick?: (m: ModalInterface) => void;
  folderList?: FolderInterface[];
}

function Card({ card, folderList, onClick }: Props) {
  const str = calcDate(card.created_at || card.createdAt);
  return (
    <>
      <div className={styles["card-container"]}>
        {onClick && (
          <>
            <StarButton card={card} />
            <KebabButton
              card={card}
              folderList={folderList}
              onClick={onClick}
            />
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
              src={
                card.image_source || card.imageSource || "icons/no-img-card.svg"
              }
              alt={card.title}
            />
          </div>
          <div className={styles["card-text-section"]}>
            <p className={styles["time-stamp"]}>{str}</p>
            <p className={styles["introduce-text"]}>{card.description}</p>
            <p className={styles["created-date"]}>
              {formatDate(card.created_at || card.createdAt)}
            </p>
          </div>
        </a>
      </div>
    </>
  );
}

export default Card;
