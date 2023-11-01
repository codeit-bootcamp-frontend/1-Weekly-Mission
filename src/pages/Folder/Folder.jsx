import { useSearchParams } from 'react-router-dom';
import * as S from './Folder.style';
import Layout from 'components/Layout';
import useAsync from 'hooks/useAsync';
import { DEFAULT_USER_ID, DEFAULT_FOLDER_ID } from 'apis/config/default';
import { getLinks } from 'apis/apiClient';
import AddLinkContainer from './components/AddLinkContainer';
import SearchBar from 'components/SearchBar';
import FoldersContainer from './components/FoldersContainer';
import CardsContainer from 'components/CardsContainer';
import NoLinkView from './components/NoLinkView';
import { useEffect } from 'react';

function Folder() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFolderId = searchParams.get('folderId');
  const { data: linksData, fetchData: getLinksAsync } = useAsync({
    asyncFunction: getLinks,
    initialArgs: [DEFAULT_USER_ID, initialFolderId],
    skip: true,
  });

  const setFolderLinks = (nextFolderId) => {
    if (nextFolderId === DEFAULT_FOLDER_ID) {
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
