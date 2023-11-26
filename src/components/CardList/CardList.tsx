import Card from 'components/CardList/Card';
import * as S from './CardList.style';
import { Data } from './types';

interface Props {
  items: Data[];
  searchKeyword: string;
}

function CardList({ items, searchKeyword }: Props) {
  const filteredItems = items?.filter(
    (item) =>
      item.title?.includes(searchKeyword) ||
      item.description?.includes(searchKeyword) ||
      item.url.includes(searchKeyword)
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
