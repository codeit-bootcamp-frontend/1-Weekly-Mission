/*Card 컴포넌트*/

import Link from "next/link";

import formatDate from "@/utils/formatDate";
import calcDate from "@/utils/calcDate";
import { CardType } from "@/types/CardType";
import Kebab from "../Kebab/Kebab";

import styles from "./Card.module.scss";

interface CardProps {
  card: CardType;
}

function Card({ card }: CardProps) {
  const str = calcDate(card.created_at);

  return (
    <>
      <div className={styles["card-container"]}>
        <Kebab cardId={String(card?.id)} cardUrl={card?.url} />
        <Link
          href={card?.url ?? ""}
          target="_blank"
          rel="noreferrer noopener"
          className={styles["card-link"]}
        >
          <div className={styles["card-img-section"]}>
            <img
              src={card?.image_source || "/icons/no-img-card.svg"}
              alt={card?.title ?? ""}
            />
          </div>
          <div className={styles["card-text-section"]}>
            <p className={styles["time-stamp"]}>{str}</p>
            <p className={styles["introduce-text"]}>{card?.description}</p>
            <p className={styles["created-date"]}>
              {formatDate(card.created_at)}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Card;
