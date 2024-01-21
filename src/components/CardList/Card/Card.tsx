/*Card 컴포넌트*/

import Link from "next/link";
import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";

import Kebab from "@/components/CardList/Kebab/Kebab";
import Favorite from "@/components/CardList/Favorite/Favorite";
import formatDate from "@/utils/formatDate";
import calcDate from "@/utils/calcDate";
import { CardType } from "@/types/CardType";

import styles from "./Card.module.scss";

interface CardProps {
  card: CardType;
  isShared?: boolean;
  id: number;
  index: number;
  moveCard: any;
}

const ItemTypes = {
  CARD: "card",
};

export default function Card({
  card,
  isShared,
  id,
  index,
  moveCard,
}: CardProps) {
  const str = calcDate(card.created_at);
  const ref = useRef(null); // (*)

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: { id, index, type: ItemTypes.CARD },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  // BUG - 타입 에러 수정
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => moveCard(item.index, index),
  });
  drag(drop(ref));

  return (
    <>
      <div ref={ref} className={styles["card-container"]}>
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
