import Link from "next/link";
import StarButton from "@/components/common/StarButton/StarButton";
import KebabButton from "@/components/common/KebabButton/KebabButton";
import { CardInterface, FolderInterface, ModalInterface } from "@/types";
import formatDate from "@/utils/formatDate";
import calcDate from "@/utils/calcDate";
import styles from "./Card.module.scss";

function Card({
  card,
  folderList,
  onClick,
}: {
  card: CardInterface;
  folderList?: FolderInterface[];
  onClick?: (m: ModalInterface) => void;
}) {
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
        {/* TODO - 링크 주소가 잘못됐다는 페이지 만들기 */}
        <Link
          href={card.url || ""}
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
        </Link>
      </div>
    </>
  );
}

export default Card;
