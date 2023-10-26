import * as S from './Folder.style';
import { getSharedFolder } from 'utils/apiClient';
import useAsync from 'hooks/useAsync';
import Banner from 'pages/Shared/components/Banner';
import SearchBar from 'pages/Shared/components/SearchBar';
import CardList from 'pages/Shared/components/CardList';

function Folder() {
  const [data, isLoading, loadingError, getSharedFolderAsync] =
    useAsync(getSharedFolder);

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
