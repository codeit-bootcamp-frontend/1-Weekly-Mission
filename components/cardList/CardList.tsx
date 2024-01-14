import Card from "@/components/card/Card";
import * as S from "@/components/cardList/CardList.style";
import { Folder, Link } from "@/types/type";

interface CardListProps {
  links: Link[];
  folders?: Folder[];
  isShared: boolean;
  folderId: string;
}

const CardList = ({ links, folders, isShared, folderId }: CardListProps) => {
  if (!links?.length) return <S.EmptyListMessage>저장된 링크가 없습니다.</S.EmptyListMessage>;
  return (
    <S.CardList>
      {links?.map((link) => (
        <Card folders={folders} link={link} key={link.id} isShared={isShared} folderId={folderId} />
      ))}
    </S.CardList>
  );
};

export default CardList;
