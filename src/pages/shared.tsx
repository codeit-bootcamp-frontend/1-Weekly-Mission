import FolderInfo from '@components/FolderInfo';
import SearchBar from '@components/SearchBar';
import SampleCardList from '@components/SampleCardList';
import { MainDiv } from '@styles/MainDiv';
import { useState } from 'react';
import apiRequest from '@api/apiRequest';
import Layout from '@components/Layout/Layout';

export interface Folder {
  id: number;
  name: string;
  owner: Owner;
  links: Link[];
  count: number;
}

interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

export interface Link {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
}

interface Props {
  folder: Folder;
}

export async function getStaticProps() {
  const response = await apiRequest({ url: '/sample/folder' });
  const folder = response.data?.folder;

  return {
    props: {
      folder: folder,
    },
  };
}

const Shared = ({ folder }: Props) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <Layout>
      <FolderInfo folder={folder} />
      <MainDiv>
        <SearchBar setSearchKeyword={setSearchKeyword} />
        <SampleCardList searchKeyword={searchKeyword} items={folder?.links} />
      </MainDiv>
    </Layout>
  );
};

export default Shared;
