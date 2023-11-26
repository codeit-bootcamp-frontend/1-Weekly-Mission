import * as S from './Folder.style';
import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
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
      setSearchParams({ folderId: String(nextFolderId) });
    }
  };

  useEffect(() => {
    getLinks();
  }, [searchParams]);

  const initialKeyword = searchParams.get('keyword') ?? '';
  const [keyword, setKeyword] = useState(initialKeyword ?? '');
  // const links = getLinks(initialKeyword);

  const onKeywordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const onSearch = (e: SyntheticEvent) => {
    e.preventDefault();
    if (keyword === '') {
      setFolderLinks(Number(initialFolderId));
    } else {
      searchParams.set('keyword', keyword);
      setSearchParams(searchParams);
    }
  };

  const filteredLinks = filterLinks(links?.data, initialKeyword);

  return (
    <Layout isLoggedIn userId={DEFAULT_USER_ID}>
      <AddLinkContainer userId={DEFAULT_USER_ID} />
      <S.ContentContainer>
        <SearchBar
          onSearch={onSearch}
          onChange={onKeywordChange}
          value={keyword}
        />
        <S.SearchText $show={Boolean(initialKeyword)}>
          <span>{initialKeyword}</span>
          으로 검색한 결과입니다.
        </S.SearchText>
        <FoldersContainer
          userId={DEFAULT_USER_ID}
          initialFolderId={Number(initialFolderId)}
          setFolderLinks={setFolderLinks}
        />

        {filterLinks?.length !== 0 ? (
          <CardsContainer cards={filteredLinks} userId={DEFAULT_USER_ID} />
        ) : (
          <NoLinkView />
        )}
      </S.ContentContainer>
    </Layout>
  );
}

export default Folder;

function filterLinks(links?: CardProps[], keyword?: string) {
  if (!links) return;
  if (!keyword) return links;

  const lowered = keyword.toLowerCase();
  return links?.filter(({ url, title, description }) => {
    return (
      url?.toLowerCase().includes(lowered) ||
      title?.toLowerCase().includes(lowered) ||
      description?.toLowerCase().includes(lowered)
    );
  });
}
