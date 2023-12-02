import { CardListProps } from "@/types/type";
import Card from "@/components/card/Card";
import * as S from "@/components/cardList/CardList.style";

const CardList = ({ links, folders, isShared }: CardListProps) => {
  if (!links?.length) return <S.EmptyListMessage>저장된 링크가 없습니다.</S.EmptyListMessage>;
  return (
    <S.CardList>
      {links?.map((link) => (
        <Card folders={folders} link={link} key={link.id} isShared={isShared} />
      ))}
    </S.CardList>
  );
};

export default CardList;
