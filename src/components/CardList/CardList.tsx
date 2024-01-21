/*CardList 컴포넌트*/

import { useQuery } from "@tanstack/react-query";

import { getAllCards, getCards } from "@/api/getCardCRUDApi";
import Card from "@/components/CardList/Card/Card";
import { CardType } from "@/types/CardType";

import styles from "./CardList.module.scss";

interface CardListProps {
  folderId?: string;
  keyword?: string;
}

export default function CardList({ folderId, keyword = "" }: CardListProps) {
  const { data: cardList } = useQuery({
    queryKey: ["card-list", folderId],
    queryFn: () => {
      if (!folderId) return getAllCards();
      else return getCards(folderId);
    },
    staleTime: 1000 * 60,
  });

  if (!cardList || cardList.length === 0) {
    return (
      <div className={styles["no-card-list"]}> 저장된 링크가 없습니다.</div>
    );
  }
  let currentCardList = cardList;

  if (keyword) {
    const searchTerm = keyword.toLowerCase().split(" ").join("");

    currentCardList = cardList.filter((card: CardType) => {
      const searchText = `${card?.description}${card?.url}${card?.title}`
        .toLowerCase()
        .split(" ")
        .join("");
      return searchText.includes(searchTerm);
    });
  }

  return (
    <section className={styles["card-section"]}>
      {currentCardList?.map((card: CardType) => {
        return <Card card={card} key={card.id} />;
      })}
    </section>
  );
}
