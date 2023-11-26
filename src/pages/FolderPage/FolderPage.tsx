import AddLinkForm from 'components/AddLinkForm';
import CardList from 'components/CardList';
import { Data } from 'components/CardList/types';
import FolderList from 'components/FolderList';
import SearchBar from 'components/SearchBar';
import useRequest from 'hooks/useRequest';
import { useEffect, useState } from 'react';
import { MainDiv } from 'styles/MainDiv';

interface Folders {
  data: Data[];
}

function FolderPage() {
  const [folder, setFolder] = useState<Data[]>([]);
  const [folderId, setFolderId] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  const getFolderId = (folderId: string) => {
    setFolderId(folderId);
  };

  const { fetch: fetchLoad } = useRequest({
    options: {
      url: `/users/1/links?folderId=${folderId}`,
    },
  });

  useEffect(() => {
    const loadFolder = async () => {
      const { data } = await fetchLoad();
      const typedData = data as Folders;
      setFolder(typedData.data);
    };

    loadFolder();
  }, [folderId]);

  return (
    <>
      <AddLinkForm />
      <MainDiv>
        <SearchBar setSearchKeyword={setSearchKeyword} />
        <FolderList getFolderId={getFolderId} />
        <CardList items={folder} searchKeyword={searchKeyword} />
      </MainDiv>
    </>
  );
}

export default FolderPage;
