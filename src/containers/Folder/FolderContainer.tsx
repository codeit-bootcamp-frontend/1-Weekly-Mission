import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import CardList from '../../components/Card/CardList';
import FolderNavbar from '../../components/Folder/FolderNavbar';
import FolderMenubar from '../../components/Folder/FolderMenubar';
import Searchbar from '../../components/Searchbar/Searchbar';
import NoLink from './NoLink';
import { fetchGet } from '../../apis/api';
import { DEFAULT_FOLDER } from '../../constants/constant';
import * as S from './styles';
// import { useFetchUserLinks } from '../../apis/fetch';
import { FolderItem, UserLinksItem } from '../../apis/fetch';

interface FolderContainerProps {
  folderData: FolderItem[];
  userId: number;
  userLinks: UserLinksItem[];
}

const FolderContainer = ({
  folderData,
  userId,
  userLinks,
}: FolderContainerProps) => {
  const [selectedFolderName, setSelectedFolderName] = useState<string>(
    DEFAULT_FOLDER.name,
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const [cards, setCards] = useState<UserLinksItem[]>([]);
  const currentFolderId = Number(searchParams.get('folderId'));
  const [searchText, setSearchText] = useState<string>('');

  const handleFolderSelect = async (folderId: string) => {
    if (folderId === '0') setSelectedFolderName(DEFAULT_FOLDER.name);
    else {
      const selectedFolderNameArr: any = folderData.find(
        (data: { id: number }) => folderId === String(data.id),
      );
      setSelectedFolderName(selectedFolderNameArr[0]);
    }
    setSearchParams(folderId !== '0' ? { folderId } : {});

    let query;
    if (Number(folderId) !== 0) {
      query = `/api/users/${userId}/links?folderId=${folderId}`;
    } else query = `/api/users/${userId}/links`;
    const fetchedData = await fetchGet(query);
    setCards(fetchedData.data);
  };

  const handleSearchParam = async () => {
    if (currentFolderId === null || currentFolderId === 0) {
      setCards(userLinks);
      setSelectedFolderName(DEFAULT_FOLDER.name);
    } else {
      const test: UserLinksItem[] =
        cards.length > 0
          ? cards
          : userLinks
              .filter(
                (card: {
                  folder_id: number;
                  description: string;
                  url: string;
                  title: string;
                }) =>
                  card.folder_id === currentFolderId ||
                  card['description']?.includes(searchText) ||
                  card['url']?.includes(searchText) ||
                  card['title']?.includes(searchText),
              )
              .map((card) => card);
      setCards(test);

      const selectedFolder: FolderItem | undefined = folderData.find(
        (folder: { id: number }) => folder.id === currentFolderId,
      );
      if (selectedFolder === undefined) throw new Error();
      setSelectedFolderName(selectedFolder.name);
    }
  };

  const handleSearchbar = (searchedText: string) => {
    console.log(searchedText, userLinks);
    setSearchText(searchedText);
    searchedText.length > 0
      ? setCards(
          userLinks.filter(
            (link: { description: string; url: string; title: string }) =>
              link['description']?.includes(searchedText) ||
              link['url']?.includes(searchedText) ||
              link['title']?.includes(searchedText),
          ),
        )
      : setCards(userLinks);
  };

  useEffect(() => {
    handleSearchParam();
  }, [searchParams]);

  console.log(searchText, cards);
  return (
    <S.CardContainerBox>
      <Searchbar handleSearch={handleSearchbar} />

      {cards && cards.length === 0 ? (
        <NoLink />
      ) : (
        cards && (
          <>
            {searchText.length > 0 && (
              <S.FolderSearchTextBox>
                <span>{searchText}</span>
                으로 검색한 결과입니다.
              </S.FolderSearchTextBox>
            )}

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
};

export default FolderContainer;
