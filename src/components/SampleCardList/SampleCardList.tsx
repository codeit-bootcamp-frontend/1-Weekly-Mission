import * as S from './SampleCardList.style';
import SampleCard from './SampleCard';
import useRequest from 'hooks/useRequest';
import { useMemo } from 'react';

interface Data {
  folder: Folder;
}

interface Folder {
  id: number;
  name: string;
  owner: Owner;
  links: Link[];
  count: number;
}

interface Link {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
}

interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

interface Props {
  searchKeyword: string;
}

function SampleCardList({ searchKeyword }: Props) {
  const { data } = useRequest<Data>({ options: { url: '/sample/folder' } });
  const items = data?.folder?.links;
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
}

export default SampleCardList;
