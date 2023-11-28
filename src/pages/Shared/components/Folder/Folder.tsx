import * as S from './Folder.style';
import { useSearchParams } from 'react-router-dom';
import useRequest from '@hooks/useRequest';
import { DEFAULT_USER_ID } from '@apis/config/default';
import SearchBar from '@components/SearchBar';
import CardList from '@components/CardsContainer';
import Banner from '../Banner';
import { CardProps } from '@components/CardsContainer/CardsContainer';
import filterLinks from '@utils/filterLinks';

interface SharedFolder {
  id: number;
  name: string;
  count: number;
  links: CardProps[];
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
}

function Folder() {
  const { data } = useRequest<{ folder: SharedFolder }>({
    options: {
      url: '/sample/folder',
      method: 'get',
    },
  });

  const folder = data?.folder;
  const name = folder?.name;
  const owner = folder?.owner;
  const links = folder?.links;

  const [searchParams] = useSearchParams();
  const initialKeyword = searchParams.get('keyword') ?? '';
  const filteredLinks = filterLinks(links, initialKeyword);

  return (
    <main>
      {data && <Banner name={name} owner={owner} />}
      <S.ContentContainer>
        <SearchBar />
        {data && <CardList cards={filteredLinks} userId={DEFAULT_USER_ID} />}
      </S.ContentContainer>
    </main>
  );
}

export default Folder;
