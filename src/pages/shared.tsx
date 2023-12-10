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

export interface SampleUserProfile {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

interface Props {
  folder: Folder;
  profile: SampleUserProfile;
}

export async function getStaticProps() {
  const response1 = await apiRequest({ url: '/sample/folder' });
  const folder = response1.data?.folder;

  const response2 = await apiRequest({ url: '/sample/user' });
  const profile = response2.data;

  return {
    props: {
      folder: folder,
      profile: profile,
    },
  };
}

const Shared = ({ folder, profile }: Props) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <Layout profile={profile}>
      <FolderInfo folder={folder} />
      <MainDiv>
        <SearchBar setSearchKeyword={setSearchKeyword} />
        <SampleCardList searchKeyword={searchKeyword} items={folder?.links} />
      </MainDiv>
    </Layout>
  );
};

export default Shared;
