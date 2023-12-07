import User from '@/components/User/User';
import { useEffect, useState } from 'react';
import axios from '@/lib/axios';
import Card from '@/components/Card/Card';
import styled from 'styled-components';
import CardList from '@/components/Card/CardList';
import SearchBar from '@/components/SearchBar/SearchBar';

const Shared = () => {
  interface IFolder {
    name: string;
    links: string[];
    owner: {
      name: string;
      profileImageSource: string;
    };
  }

  const [folder, setFolder] = useState({
    name: 'folder',
    links: [],
    owner: {
      name: 'owner',
      profileImageSource: '',
    },
  } as IFolder);

  const getUser = async () => {
    const res = await axios.get(`/api/sample/folder`);
    const folder = res.data.folder;
    setFolder(folder);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <User
        name={folder.owner.name}
        folderName={folder.name}
        profileImageSource={folder.owner.profileImageSource}
      />
      <Container>
        <SearchBar />
        <CardList data={folder.links} />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 200px;
`;

export default Shared;
