import AddLinkForm from '@components/AddLinkForm';
import CardList from '@components/CardList';
import { Data } from '@components/CardList/types';
import FolderList from '@components/FolderList';
import SearchBar from '@components/SearchBar';
import { useEffect, useRef, useState } from 'react';
import { MainDiv } from '@styles/MainDiv';
import apiRequest from '@api/apiRequest';
import { GetServerSidePropsContext } from 'next';
import Layout from '@components/Layout/Layout';

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
  const response = await apiRequest({
    url: `/users/1/links?folderId=${folderId}`,
  });
  const cards = response.data;

  const response2 = await apiRequest({ url: '/users/1/folders' });
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
        setIsScrolled(!entry.isIntersecting);
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
    <Layout>
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
    </Layout>
  );
}
