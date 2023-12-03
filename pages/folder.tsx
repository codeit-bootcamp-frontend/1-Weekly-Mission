import AddLinkBar from "@/components/AddLinkBar";
import FolderMenu from "@/components/FolderMenu/FolderMenu";
import NavBar from "@/components/NavBar/NavBar";
import SearchBar from "@/components/SearchBar/SearchBar";
import CardList from "@/components/CardList/CardList";
import * as S from "@/styles/Folder.styled";
import axiosInstance from '@/lib/axios';
import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { LinkDataType, getLinks } from './api/links.api';

interface LinksDataProps {
  links: LinkDataType[];
}

export const getStaticProps: GetStaticProps = async () => {
  const links = await getLinks();

  return {
    props: {
      links,
    }
  }
}

export default function FolderPage({ links }: LinksDataProps) {

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
      <footer></footer>
    </>
  );
}



