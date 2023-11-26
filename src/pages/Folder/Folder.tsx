import * as S from './Folder.style';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useRequest from '@hooks/useRequest';
import { DEFAULT_USER_ID, DEFAULT_FOLDER_ID } from '@apis/config/default';
import Layout from '@components/Layout';
import SearchBar from '@components/SearchBar';
import CardsContainer from '@components/CardsContainer';
import AddLinkContainer from './components/AddLinkContainer';
import FoldersContainer from './components/FoldersContainer';
import NoLinkView from './components/NoLinkView';
import { CardProps } from '@components/CardsContainer/CardsContainer';

function Folder() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFolderId = searchParams.get('folderId') ?? '';

  const { data: links, fetch: getLinks } = useRequest<{ data: CardProps[] }>({
    skip: true,
    options: {
      url: `/users/${DEFAULT_USER_ID}/links`,
      method: 'get',
      params: { folderId: initialFolderId },
    },
  });

  const setFolderLinks = (nextFolderId: number) => {
    if (nextFolderId === DEFAULT_FOLDER_ID) {
      setSearchParams({});
    } else {
      setSearchParams({ folderId: String(nextFolderId) } ?? {});
    }
  };

  useEffect(() => {
    getLinks();
  }, [searchParams]);

  return (
    <Layout isLoggedIn userId={DEFAULT_USER_ID}>
      <AddLinkContainer userId={DEFAULT_USER_ID} />
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
