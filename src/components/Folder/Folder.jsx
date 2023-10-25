import * as S from './Folder.style';
import { getFolder } from 'utils/apiClient';
import useAsync from 'hooks/useAsync';
import Banner from 'components/Banner';
import SearchBar from 'components/SearchBar';
import CardList from 'components/CardList';

function Folder() {
  const [data, isLoading, loadingError, getFolderAsync] = useAsync(getFolder);

  const folder = data?.folder;
  const name = folder?.name;
  const owner = folder?.owner;
  const links = folder?.links;

  return (
    <main>
      {data && <Banner info={{ name, owner }} />}
      <S.ContentContainer className='content-container'>
        <SearchBar />
        {data && <CardList links={links} />}
      </S.ContentContainer>
    </main>
  );
}

export default Folder;
