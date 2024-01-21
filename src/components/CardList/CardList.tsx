/*CardList 컴포넌트*/

import { useQuery } from "@tanstack/react-query";

import { getAllCards, getCards } from "@/api/getCardCRUDApi";
import TestCardList from "./TestCardList";

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

  return (
    <TestCardList isShared={false} keyword={keyword} cardList={cardList} />
  );
}
