import * as S from './Folder.style';
import { getSharedFolder } from 'apis/apiClient';
import useAsync from 'hooks/useAsync';
import Banner from '../Banner';
import SearchBar from 'components/SearchBar';
import CardList from 'components/CardsContainer';

function Folder() {
  const { data } = useAsync({
    asyncFunction: getSharedFolder,
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
