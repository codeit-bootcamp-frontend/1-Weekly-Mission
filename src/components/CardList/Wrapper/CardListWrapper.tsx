/*CardList 컴포넌트*/

import { useQuery } from "@tanstack/react-query";

import { getAllCards, getCards } from "@/api/getCardCRUDApi";
import CardList from "@/components/CardList/CardList";

interface CardListProps {
  folderId?: string;
  keyword?: string;
}

export default function CardListWrapper({
  folderId,
  keyword = "",
}: CardListProps) {
  const { data: cardList } = useQuery({
    queryKey: ["card-list", folderId],
    queryFn: () => {
      if (!folderId) return getAllCards();
      else return getCards(folderId);
    },
    staleTime: 1000 * 60,
  });

  return <CardList isShared={false} keyword={keyword} cardList={cardList} />;
}
