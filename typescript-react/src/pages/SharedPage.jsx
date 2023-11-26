// 기존에 있던 것
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList';
import { getCards, getSampleFolders } from '../api/api';
import useAsync from '../hooks/useAsync';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const INITIAL_FOLDER = {
  folderName: '',
  folderOwner: '',
  folderOwnerProfileImage: '',
};

function SharedPage() {
  const [sampleFolder, setSampleFolder] = useState(INITIAL_FOLDER);
  const [cardList, setCardList] = useState([]);

  const [isFolderLoading, folderLoadingError, getSampleFolderAsync] = useAsync(getSampleFolders);
  const [isLoadingCards, loadingCardsError, getCardsAsync] = useAsync(getCards);

  const handleLoadSampleFolder = async () => {
    const sampleFolderResult = await getSampleFolderAsync();
    if (!sampleFolderResult.folder) return;

    const { name = '', owner = null, links = '' } = sampleFolderResult.folder;
    setSampleFolder(() => {
      const newFolder = {
        folderName: name,
        folderOwner: owner?.name,
        folderOwnerProfileImage: owner?.profileImageSource,
      };
      return { ...newFolder };
    });
    setCardList(links); // links = 배열
  };

  useEffect(() => {
    handleLoadSampleFolder();
  }, []);

  return (
    <>
      <div>
        <Header folder={sampleFolder} />
        <CardContainer>
          <SearchBar />
          {folderLoadingError?.message && <span>{folderLoadingError.message}</span>}
          <CardList cards={cardList} />
        </CardContainer>
      </div>
    </>
  );
}

export default SharedPage;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  gap: 3.2rem;
`;
