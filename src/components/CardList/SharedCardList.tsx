/*CardList 컴포넌트*/

import { useState, useCallback, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getCards, getSharedAllCards } from "@/api/getCardCRUDApi";
import { CardType } from "@/types/CardType";
import Card from "@/components/CardList/Card/Card";

import styles from "./CardList.module.scss";

interface CardListProps {
  userId: string;
  folderId?: string;
  keyword?: string;
}

export default function SharedCardList({
  userId,
  folderId,
  keyword = "",
}: CardListProps) {
  const { data: cardList } = useQuery({
    queryKey: ["card-list", folderId],
    queryFn: () => {
      if (!folderId) return getSharedAllCards(userId);
      else return getCards(folderId);
    },
    staleTime: 1000 * 60,
  });

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
            isShared={true}
          />
        );
      })}
    </section>
  );
}
