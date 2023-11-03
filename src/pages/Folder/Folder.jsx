import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as S from './Folder.style';
import useRequest from 'hooks/useRequest';
import { DEFAULT_USER_ID, DEFAULT_FOLDER_ID } from 'apis/config/default';
import Layout from 'components/Layout';
import AddLinkContainer from './components/AddLinkContainer';
import SearchBar from 'components/SearchBar';
import FoldersContainer from './components/FoldersContainer';
import CardsContainer from 'components/CardsContainer';
import NoLinkView from './components/NoLinkView';

function Folder() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFolderId = searchParams.get('folderId');
  const { data: links, refetch: getLinks } = useRequest({
    skip: true,
    url: `/users/${DEFAULT_USER_ID}/links`,
    method: 'get',
    params: { folderId: initialFolderId },
  });

  const setFolderLinks = (nextFolderId) => {
    if (nextFolderId === DEFAULT_FOLDER_ID) {
      setSearchParams({});
    } else {
      setSearchParams({ folderId: nextFolderId } ?? {});
    }
  };

  useEffect(() => {
    getLinks();
  }, [searchParams]);

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

        {links?.data?.length !== 0 ? (
          <CardsContainer cards={links?.data} userId={DEFAULT_USER_ID} />
        ) : (
          <NoLinkView />
        )}
      </S.ContentContainer>
    </Layout>
  );
}

export default Folder;
