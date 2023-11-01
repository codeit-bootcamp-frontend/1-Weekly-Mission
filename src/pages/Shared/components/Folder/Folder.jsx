import * as S from './Folder.style';
import useRequest from 'hooks/useRequest';
import Banner from '../Banner';
import SearchBar from 'components/SearchBar';
import CardList from 'components/CardsContainer';

function Folder() {
  const { data } = useRequest({
    url: '/sample/folder',
    method: 'get',
  });

  const folder = data?.folder;
  const name = folder?.name;
  const owner = folder?.owner;
  const links = folder?.links;

  return (
    <main>
      {data && <Banner info={{ name, owner }} />}
      <S.ContentContainer>
        <SearchBar />
        {data && <CardList cards={links} />}
      </S.ContentContainer>
    </main>
  );
}

export default Folder;
