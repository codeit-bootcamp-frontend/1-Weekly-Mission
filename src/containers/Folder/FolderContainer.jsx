import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import CardList from '../../components/Card/CardList';
import FolderNavbar from '../../components/Folder/FolderNavbar';
import FolderMenubar from '../../components/Folder/FolderMenubar';
import Searchbar from '../../components/Searchbar/Searchbar';
import NoLink from './NoLink';
import { fetchGet } from '../../apis/api';
import { DEFAULT_FOLDER } from '../../utils/utils';
import * as S from './styles';

function FolderContainer({ folderData, userId, userLinks }) {
  const [isSelectedFolder, setIsSelectedFolder] = useState(undefined);
  const [selectedFolderName, setSelectedFolderName] = useState(
    DEFAULT_FOLDER.name,
  );
  const [searchParams, setSearchParams] = useSearchParams();
  console.log('이건 나와야 하는거', isSelectedFolder);
  const [cards, setCards] = useState(userLinks);
  const currentFolderId = searchParams.get('folderId');

  const handleFolderSelect = async (folderId, folderName) => {
    setIsSelectedFolder(folderId);
    console.log('클릭 했을때');
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
      setIsSelectedFolder(currentFolderId);
    }
  };

  const handleSearchbar = (event, searchedText) => {
    event.preventDefault();
    if (!searchedText) setCards(() => userLinks);
    console.log(searchedText);

    const filterdCards = userLinks.filter((link) => {
      if (
        link['description'] !== null &&
        link['description'].includes(searchedText)
      )
        return link;
    });
    setCards(() => filterdCards);
  };

  useEffect(() => {
    handleSearchParam();
  }, [currentFolderId]);

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
