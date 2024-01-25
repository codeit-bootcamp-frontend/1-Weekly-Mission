import { useState, useCallback, useEffect } from "react";

import { CardType } from "@/types/CardType";
import Card from "@/components/CardList/Card/Card";

import styles from "./CardList.module.scss";

interface CardListProps {
  isShared: boolean;
  keyword?: string;
  cardList: any;
}

export default function CardList({
  isShared,
  keyword,
  cardList,
}: CardListProps) {
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    if (cardList) {
      setCards(() => {
        return [...cardList];
      });
    }
    if (keyword) {
      const searchTerm = keyword.toLowerCase().split(" ").join("");
      const currentCardList = cards.filter((card: CardType) => {
        const searchText = `${card?.description}${card?.url}${card?.title}`
          .toLowerCase()
          .split(" ")
          .join("");
        return searchText.includes(searchTerm);
      });
      setCards(() => {
        return [...currentCardList];
      });
    }
  }, [cardList, keyword]);

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = cards[dragIndex];
      let currentCard = cards;
      currentCard.splice(dragIndex, 1);
      currentCard.splice(hoverIndex, 0, dragCard);
      setCards(() => {
        return [...currentCard];
      });
    },
    [cards],
  );

  if (!cards || cards.length === 0) {
    return (
      <div className={styles["no-card-list"]}> 저장된 링크가 없습니다.</div>
    );
  }

  return (
    <section className={styles["card-section"]}>
      {cards?.map((card: CardType, index: number) => {
        return (
          <Card
            index={index}
            id={card.id}
            moveCard={moveCard}
            card={card}
            key={card.id}
            isShared={isShared}
          />
        );
      })}
    </section>
  );
}
