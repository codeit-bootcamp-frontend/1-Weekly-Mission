import * as S from './LinkList.style';
import { getLinks } from 'utils/apiClient';
import useAsync from 'hooks/useAsync';
import CardList from 'components/CardList';
import SearchBar from 'components/SearchBar';
import FolderList from '../FolderList';

function LinkList() {
  const [data, isLoading, loadingError, getLinksAsync] = useAsync(getLinks);
  const links = data?.data;

  return (
    <S.ContentContainer>
      <SearchBar />
      <FolderList />
      {data && <CardList cards={links} />}
    </S.ContentContainer>
  );
}

export default LinkList;
