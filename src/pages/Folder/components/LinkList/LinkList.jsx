import { useSearchParams } from 'react-router-dom';
import * as S from './LinkList.style';
import { getLinks, getFolders } from 'utils/apiClient';
import useAsync from 'hooks/useAsync';
import CardList from 'components/CardList';
import SearchBar from 'components/SearchBar';
import FolderHeader from '../FolderHeader';
import NoLink from '../NoLink';

function LinkList({ userId }) {
  const [linksData, isLoadingLinks, linksLoadingError, getLinksAsync] =
    useAsync(getLinks, [userId]);
  const [foldersData, isLoadingFolders, folderLoadingError, getFoldersAsync] =
    useAsync(getFolders, [userId]);
  const [searchParams, setSearchParams] = useSearchParams();

  const setFolderLinks = (folderId) => {
    setSearchParams({ folderId } ?? {});
    getLinksAsync(userId, folderId);
  };

  return (
    <S.ContentContainer>
      <SearchBar />
      {foldersData?.data.length !== 0 && (
        <FolderHeader
          folders={foldersData?.data}
          userId={userId}
          setFolderLinks={setFolderLinks}
        />
      )}

      {linksData?.data.length !== 0 ? (
        <CardList cards={linksData?.data} />
      ) : (
        <NoLink />
      )}
    </S.ContentContainer>
  );
}

export default LinkList;
