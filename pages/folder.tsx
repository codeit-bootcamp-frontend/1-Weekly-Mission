import AddLinkBar from "@/components/AddLinkBar";
import FolderMenu from '@/components/FolderMenu';
import NavBar from "@/components/NavBar/NavBar";
import SearchBar from '@/components/SearchBar';
import CardList from '@/components/CardList';
import * as S from "@/styles/Folder.styled";
import Footer from '@/components/Footer';
import axiosInstance from '@/lib/axios';
// import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { LinkDataType, getLinks } from './api/links.api';
import { UserLinksData } from '@/src/types';


export interface UserLinksDataProps {
  links: UserLinksData[];
}

export const getStaticProps: GetStaticProps = async () => {
  const links = await getLinks();

  return {
    props: {
      links,
    }
  }
}

export default function FolderPage({ links }: UserLinksDataProps) {

  return (
    <>
      <NavBar />
      <S.Section>
        <AddLinkBar />
      </S.Section>
      <S.Main>
        <S.Container>
          <SearchBar />
          <FolderMenu />
          <CardList links={links} />
        </S.Container>
      </S.Main>
      <Footer/>
    </>
  );
}

