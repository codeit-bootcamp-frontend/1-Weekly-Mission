import * as S from './Folder.style';
import { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import useRequest from '@hooks/useRequest';
import { DEFAULT_USER_ID, DEFAULT_FOLDER_ID } from '@apis/config/default';
import filterLinks from '@utils/filterLinks';
import Layout from '@components/Layout';
import SearchBar from '@components/SearchBar';
import CardsContainer from '@components/CardsContainer';
import AddLinkContainer from './components/AddLinkContainer';
import FoldersContainer from './components/FoldersContainer';
import NoLinkView from './components/NoLinkView';
import { Link } from './Folder.types';

function Folder() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFolderId = searchParams.get('folderId') ?? '';

  const { data: links, fetch: getLinks } = useRequest<{ data: Link[] }>({
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
  const filteredLinks = filterLinks(links?.data, initialKeyword);

  const [floatAddLink, setFloatAddLink] = useState(false);
  const addLinkTarget = useRef<HTMLDivElement>(null);
  const navTarget = useRef<HTMLDivElement>(null);
  const footerTarget = useRef<HTMLDivElement>(null);

  const onIntersect: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    if (entry.time < 500) {
      return;
    }
    if (entry.isIntersecting) {
      setFloatAddLink(false);
    } else {
      setFloatAddLink(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      threshold: [0, 1],
    });

    if (addLinkTarget.current) {
      observer.observe(addLinkTarget.current);
    }
    if (navTarget.current) {
      observer.observe(navTarget.current);
    }
    if (footerTarget.current) {
      observer.observe(footerTarget.current);
    }
  }, [addLinkTarget, navTarget, footerTarget]);

  return (
    <Layout
      isLoggedIn
      userId={DEFAULT_USER_ID}
      navRef={navTarget}
      footerRef={footerTarget}
    >
      <AddLinkContainer
        userId={DEFAULT_USER_ID}
        addLinkRef={addLinkTarget}
        float={floatAddLink}
      />
      <S.ContentContainer>
        <SearchBar />
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
