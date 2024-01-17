/*CardList 컴포넌트

cardList: cardlist 값을 받아 Card 컴포넌트들을 map으로 리턴
keyword: keyword 값을 받아 keyword가 포함된 card 컴포넌트들만 filter 해서 map으로 리턴하고,
받은 keyword가 없다면 전체 card 컴포넌트들을 map으로 리턴
onClick: Card 컴포넌트에게 내려줌
folderList: Card 컴포넌트에게 내려줌
*/
import Card from "@/components/CardList/Card/Card";
import { useQuery } from "@tanstack/react-query";

import { getAllCards, getCards } from "@/api/getCardCRUDApi";

import styles from "./CardList.module.scss";

interface CardListProps {
  folderId?: string;
  keyword?: string;
}

function CardList({ folderId, keyword = "" }: CardListProps) {
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

    currentCardList = cardList.filter((card) => {
      const searchText = `${card?.description}${card?.url}${card?.title}`
        .toLowerCase()
        .split(" ")
        .join("");
      return searchText.includes(searchTerm);
    });
  }
  return (
    <section className={styles["card-section"]}>
      {currentCardList?.map((card) => {
        return <Card card={card} key={card.id} />;
      })}
    </section>
  );
}

export default CardList;
