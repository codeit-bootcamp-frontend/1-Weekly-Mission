import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import filterLinks from '@/utils/filterLinks';
import { DEFAULT_FOLDER_ID, DEFAULT_USER_ID } from '@/services/config/default';
import { Folder as IFolder, Link } from '@/types/Folder.types';
import Layout from '@/components/Layout';
import SearchBar from '@/components/SearchBar';
import CardsContainer from '@/components/cards/CardsContainer';
import AddLinkContainer from './components/AddLinkContainer';
import FoldersContainer from './components/FoldersContainer';

interface Props {
  links: Link[];
  folders: IFolder[];
  folderId?: number;
}

function Folder({ links, folders, folderId }: Props) {
  const router = useRouter();

  const setFolderLinks = (nextFolderId: number) => {
    if (nextFolderId === DEFAULT_FOLDER_ID) {
      router.push('/folder');
    } else {
      router.push(`/folder/${nextFolderId}`);
    }
  };

  const initialKeyword = Array.isArray(router.query.keyword)
    ? router.query.keyword[0]
    : router.query.keyword;
  const filteredLinks = filterLinks(links, initialKeyword);

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
      <main className='px-32pxr pb-100pxr pt-20pxr pc:mx-auto pc:w-[115rem]'>
        <SearchBar />
        {initialKeyword && (
          <div className='pt-32pxr text-24pxr font-semibold tracking-tight text-gray-60 tablet:pt-40pxr tablet:text-32pxr'>
            <span className='text-gray-100'>{initialKeyword}</span>
            으로 검색한 결과입니다.
          </div>
        )}

        <FoldersContainer
          folders={folders}
          initialFolderId={folderId}
          setFolderLinks={setFolderLinks}
        />
        <CardsContainer cards={filteredLinks} userId={DEFAULT_USER_ID} />
      </main>
    </Layout>
  );
}

export default Folder;
