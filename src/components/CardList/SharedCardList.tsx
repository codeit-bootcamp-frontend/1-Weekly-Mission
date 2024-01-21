/* shared 페이지에서의 CardList 컴포넌트*/

import { useQuery } from "@tanstack/react-query";

import { getCards, getSharedAllCards } from "@/api/getCardCRUDApi";
import TestCardList from "./TestCardList";

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
  return <TestCardList isShared={true} keyword={keyword} cardList={cardList} />;
}
