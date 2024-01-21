/* shared 페이지에서의 CardList 컴포넌트*/

import { useQuery } from "@tanstack/react-query";

import { getCards, getSharedAllCards } from "@/api/getCardCRUDApi";
import CardList from "@/components/CardList/CardList";

interface SharedCardListProps {
  userId: string;
  folderId?: string;
  keyword?: string;
}

export default function SharedCardListWrapper({
  userId,
  folderId,
  keyword = "",
}: SharedCardListProps) {
  const { data: cardList } = useQuery({
    queryKey: ["card-list", folderId],
    queryFn: () => {
      if (!folderId) return getSharedAllCards(userId);
      else return getCards(folderId);
    },
    staleTime: 1000 * 60,
  });
  return <CardList isShared={true} keyword={keyword} cardList={cardList} />;
}
