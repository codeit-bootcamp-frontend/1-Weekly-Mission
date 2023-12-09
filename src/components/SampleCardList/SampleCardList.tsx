import * as S from './SampleCardList.style';
import SampleCard from './SampleCard';
import { useMemo } from 'react';
import { Link } from '@pages/shared';

interface Props {
  searchKeyword: string;
  items: Link[];
}

const SampleCardList = ({ searchKeyword, items }: Props) => {
  const lowerCaseKeyword = searchKeyword.toLowerCase();

  const filteredItems = useMemo(
    () =>
      items
        ? items.filter((item) => {
            const itemData =
              `${item.title} ${item.description} ${item.url}`.toLowerCase();
            return itemData.includes(lowerCaseKeyword);
          })
        : [],
    [items, lowerCaseKeyword]
  );

  return (
    <>
      {filteredItems && (
        <S.CardListContainer>
          {filteredItems.map((item) => (
            <S.CardContainer key={item.id}>
              <SampleCard item={item} />
            </S.CardContainer>
          ))}
        </S.CardListContainer>
      )}
    </>
  );
};

export default SampleCardList;
