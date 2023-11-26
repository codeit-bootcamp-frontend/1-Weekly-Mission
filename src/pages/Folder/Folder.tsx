import * as S from './Folder.style';
import {
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  useState,
  useRef,
} from 'react';
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

  const onReset = () => {
    setKeyword('');
    setFolderLinks(Number(initialFolderId));
  };

  const filteredLinks = filterLinks(links?.data, initialKeyword);

  const target = useRef<HTMLDivElement>(null);
  const [floatAddLink, setFloatAddLink] = useState(false);

  const onAddLinkHidden: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    setFloatAddLink(!entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onAddLinkHidden, {
      threshold: 0,
    });
    if (target.current) {
      observer.observe(target.current);
    }
    return () => observer.disconnect();
  }, [target]);

  return (
    <Layout isLoggedIn userId={DEFAULT_USER_ID}>
      <AddLinkContainer
        userId={DEFAULT_USER_ID}
        addLinkRef={target}
        float={floatAddLink}
      />
      <S.ContentContainer>
        <SearchBar
          value={keyword}
          onSearch={onSearch}
          onChange={onKeywordChange}
          onReset={onReset}
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
