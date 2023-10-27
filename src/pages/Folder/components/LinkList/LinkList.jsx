import { useSearchParams } from 'react-router-dom';
import * as S from './LinkList.style';
import { getLinks } from 'utils/apiClient';
import useAsync from 'hooks/useAsync';
import CardList from 'components/CardList';
import SearchBar from 'components/SearchBar';
import FolderHeader from '../FolderHeader';

function LinkList({ userId }) {
  const [linksData, isLoading, loadingError, getLinksAsync] = useAsync(
    getLinks,
    [userId]
  );
  const [searchParams, setSearchParams] = useSearchParams();

  const setFolderLinks = (folderId) => {
    setSearchParams({ folderId } ?? {});
    getLinksAsync(userId, folderId);
  };

  return (
    <S.ContentContainer>
      <SearchBar />
      <FolderHeader userId={userId} setFolderLinks={setFolderLinks} />
      {linksData?.data && <CardList cards={linksData?.data} />}
    </S.ContentContainer>
  );
}

export default LinkList;
