import * as S from './SampleCardList.style';
import SampleCard from './SampleCard';
import useRequest from 'hooks/useRequest';

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

function SampleCardList() {
  const { data } = useRequest<Data>({ options: { url: '/sample/folder' } });
  const items = data?.folder?.links;

  return (
    <>
      {items && (
        <S.CardListContainer>
          {items.map((item) => (
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
