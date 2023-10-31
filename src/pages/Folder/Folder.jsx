import { useSearchParams } from 'react-router-dom';
import * as S from './Folder.style';
import Layout from 'components/Layout';
import useAsync from 'hooks/useAsync';
import { getLinks } from 'utils/apiClient';
import AddLinkContainer from './components/AddLinkContainer';
import SearchBar from 'components/SearchBar';
import FoldersContainer from './components/FoldersContainer';
import CardsContainer from 'components/CardsContainer';
import NoLinkView from './components/NoLinkView';
import { useEffect } from 'react';

const DEFAULT_USER_ID = 1;

function Folder() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFolderId = searchParams.get('folderId');
  const [linksData, , , getLinksAsync] = useAsync({
    asyncFunction: getLinks,
    initialArgs: [DEFAULT_USER_ID, initialFolderId],
  });

  const setFolderLinks = (nextFolderId) => {
    if (nextFolderId === 0) {
      setSearchParams({});
    } else {
      setSearchParams({ folderId: nextFolderId } ?? {});
    }

    getLinksAsync(DEFAULT_USER_ID, nextFolderId);
  };

  useEffect(() => {
    getLinksAsync(DEFAULT_USER_ID, initialFolderId);
  }, [initialFolderId]);

  return (
    <Layout isLoggedIn userId={DEFAULT_USER_ID}>
      <AddLinkContainer />
      <S.ContentContainer>
        <SearchBar />
        <FoldersContainer
          userId={DEFAULT_USER_ID}
          initialFolderId={Number(initialFolderId)}
          setFolderLinks={setFolderLinks}
        />

        {linksData?.data?.length !== 0 ? (
          <CardsContainer cards={linksData?.data} />
        ) : (
          <NoLinkView />
        )}
      </S.ContentContainer>
    </Layout>
  );
}

export default Folder;
