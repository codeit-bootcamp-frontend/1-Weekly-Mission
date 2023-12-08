import Card from '@components/CardList/Card';
import * as S from './CardList.style';
import { Data } from './types';
import { useMemo } from 'react';
import { Folder } from '@pages/folder';

interface Props {
  folders: Folder[];
  items: Data[];
  searchKeyword: string;
}

function CardList({ folders, items, searchKeyword }: Props) {
  const lowerCaseKeyword = searchKeyword.toLowerCase();

  const filteredItems = useMemo(
    () =>
      items?.filter((item) => {
        const itemData =
          `${item.title} ${item.description} ${item.url}`.toLowerCase();
        return itemData.includes(lowerCaseKeyword);
      }),
    [items, lowerCaseKeyword]
  );

  if (!filteredItems?.length) {
    return <S.NoLink>저장된 링크가 없습니다</S.NoLink>;
  }

  return (
    <S.CardListContainer>
      {filteredItems.map((item) => (
        <S.CardContainer key={item.id}>
          <Card folders={folders} item={item} />
        </S.CardContainer>
      ))}
    </S.CardListContainer>
  );
}

export default CardList;
