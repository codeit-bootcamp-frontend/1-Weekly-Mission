import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import CardList from '../../components/Card/CardList';
import FolderNavbar from '../../components/Folder/FolderNavbar';
import FolderMenubar from '../../components/Folder/FolderMenubar';
import Searchbar from '../../components/Searchbar/Searchbar';
import NoLink from './NoLink';
import { fetchGet } from '../../apis/api';
import { DEFAULT_FOLDER } from '../../constants/constant';
import * as S from './styles';

function FolderContainer({ folderData, userId, userLinks }) {
  const [selectedFolderName, setSelectedFolderName] = useState(
    DEFAULT_FOLDER.name,
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const [cards, setCards] = useState(null);
  const currentFolderId = searchParams.get('folderId');
  const handleFolderSelect = async (folderId, folderName) => {
    setSelectedFolderName(folderName);
    setSearchParams(folderId !== 0 ? { folderId } : {});

    let query;
    if (folderId !== 0) {
      query = `/api/users/${userId}/links?folderId=${folderId}`;
    } else query = `/api/users/${userId}/links`;
    const fetchedData = await fetchGet(query);
    setCards(() => fetchedData.data);
  };

  const handleSearchParam = () => {
    if (currentFolderId === null) {
      setCards(userLinks);
      setSelectedFolderName(DEFAULT_FOLDER.name);
    } else {
      const selectedCards = userLinks
        .filter((card) => String(card.folder_id) === currentFolderId)
        .map((card) => card);
      setCards(() => selectedCards);

      const selectedFolder = folderData.find(
        (folder) => String(folder.id) === currentFolderId,
      );
      setSelectedFolderName(selectedFolder.name);
    }
  };

  const handleSearchbar = (event, searchedText) => {
    event.preventDefault();
    if (!searchedText) setCards(() => userLinks);
    else {
      const filterdCards = userLinks.filter((link) =>
        link['description']?.includes(searchedText),
      );
      setCards(() => filterdCards);
    }
  };

  useEffect(() => {
    handleSearchParam();
  }, [currentFolderId]);

  useEffect(() => {
    setCards(userLinks);
  }, [userLinks]);

  return (
    <S.CardContainerBox>
      <Searchbar handleSearch={handleSearchbar} />

      {cards && cards.length === 0 ? (
        <NoLink />
      ) : (
        cards && (
          <>
            <S.FolderContainerBox>
              <FolderNavbar
                folderData={folderData}
                handleFolderSelect={handleFolderSelect}
                currentFolderId={currentFolderId}
              />
            </S.FolderContainerBox>

            <S.FolderNameBox>
              <FolderMenubar selectedFolderName={selectedFolderName} />
            </S.FolderNameBox>

            <CardList cards={cards} />
          </>
        )
      )}
    </S.CardContainerBox>
  );
}

export default FolderContainer;
