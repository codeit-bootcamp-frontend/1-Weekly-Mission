/*Card 컴포넌트*/

import Link from "next/link";

import formatDate from "@/utils/formatDate";
import calcDate from "@/utils/calcDate";
import { CardType } from "@/types/CardType";
import Kebab from "@/components/CardList/Kebab/Kebab";

import styles from "./Card.module.scss";
import Favorite from "../Favorite/Favorite";

interface CardProps {
  card: CardType;
  isShared?: boolean;
}

export default function Card({ card, isShared }: CardProps) {
  const str = calcDate(card.created_at);

  return (
    <>
      <div className={styles["card-container"]}>
        {!isShared && (
          <>
            <Favorite cardId={String(card?.id)} isFilled={card.favorite} />
            <Kebab cardId={String(card?.id)} cardUrl={card?.url} />
          </>
        )}
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
