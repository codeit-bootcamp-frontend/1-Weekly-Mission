import AddLinkForm from '@components/AddLinkForm';
import CardList from '@components/CardList';
import { Data } from '@components/CardList/types';
import FolderList from '@components/FolderList';
import SearchBar from '@components/SearchBar';
import { useEffect, useRef, useState } from 'react';
import { MainDiv } from '@styles/MainDiv';
import fetch from '@api/fetch';
import { GetServerSidePropsContext } from 'next';

interface Cards {
  data: Data[];
}

export interface Folder {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  link: Link;
}

interface Link {
  count: number;
}

interface Props {
  cards: Cards;
  folders: Folder[];
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const folderId = context.query.folderId || '';
  const response = await fetch({ url: `/users/1/links?folderId=${folderId}` });
  const cards = response.data;

  const response2 = await fetch({ url: '/users/1/folders' });
  const folders = response2.data.data;

  return {
    props: {
      cards: cards,
      folders: folders,
    },
  };
}

export default function Folder({ cards, folders }: Props) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      },
      { threshold: 0 }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <>
      <div ref={ref}>
        <AddLinkForm isScrolled={isScrolled} />
      </div>
      <MainDiv>
        <SearchBar setSearchKeyword={setSearchKeyword} />
        <FolderList folders={folders} />
        <CardList
          folders={folders}
          items={cards?.data}
          searchKeyword={searchKeyword}
        />
      </MainDiv>
    </>
  );
}
