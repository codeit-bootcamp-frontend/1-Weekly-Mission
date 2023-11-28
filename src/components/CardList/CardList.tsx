import Card from 'components/CardList/Card';
import * as S from './CardList.style';
import { Data } from './types';
import { useMemo } from 'react';

interface Props {
  items: Data[];
  searchKeyword: string;
}

function CardList({ items, searchKeyword }: Props) {
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

  return (
    <>
      {!filteredItems.length ? (
        <S.NoLink>저장된 링크가 없습니다</S.NoLink>
      ) : (
        filteredItems && (
          <S.CardListContainer>
            {filteredItems.map((item) => (
              <S.CardContainer key={item.id}>
                <Card item={item} />
              </S.CardContainer>
            ))}
          </S.CardListContainer>
        )
      )}
    </>
  );
}

export default CardList;
