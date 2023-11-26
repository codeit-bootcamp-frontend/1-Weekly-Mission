import AddLinkForm from 'components/AddLinkForm';
import CardList from 'components/CardList';
import { Data } from 'components/CardList/types';
import FolderList from 'components/FolderList';
import SearchBar from 'components/SearchBar';
import useRequest from 'hooks/useRequest';
import { useEffect, useRef, useState } from 'react';
import { MainDiv } from 'styles/MainDiv';

interface Folders {
  data: Data[];
}

function FolderPage() {
  const [folder, setFolder] = useState<Data[]>([]);
  const [folderId, setFolderId] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const ref = useRef(null);

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
        <FolderList getFolderId={getFolderId} />
        <CardList items={folder} searchKeyword={searchKeyword} />
      </MainDiv>
    </>
  );
}

export default FolderPage;
