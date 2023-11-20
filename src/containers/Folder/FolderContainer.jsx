import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import CardList from '../../components/Card/CardList';
import FolderNavbar from '../../components/Folder/FolderNavbar';
import FolderMenubar from '../../components/Folder/FolderMenubar';
import Searchbar from '../../components/Searchbar/Searchbar';
import NoLink from './NoLink';
import { fetchGet } from '../../apis/api';
import { DEFAULT_FOLDER, MODAL_NAME } from '../../constants/constant';
import * as S from './styles';
import Modal from '../../components/Modal/Modal';
import useOnClickOutside from '../../hooks/useOnClickOutside';
// import { useFetchUserLinks } from '../../apis/fetch';

const FolderContainer = ({ folderData, userId, userLinks }) => {
  const [selectedFolderName, setSelectedFolderName] = useState(
    DEFAULT_FOLDER.name,
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const [cards, setCards] = useState([]);
  const currentFolderId = searchParams.get('folderId');

  // useFetchUserLinks를 사용하여 fetchGet을 대체해보자
  // const {
  //   isLoading,
  //   data: cardsData,
  //   fetchData: refetch,
  // } = useFetchUserLinks(userId, currentFolderId);

  const handleFolderSelect = async (folderId) => {
    const selectedFolderName = folderData
      .filter((folder) => folderId === folder.id)
      .map((folder) => folder.name);
    setSelectedFolderName(selectedFolderName[0]);
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
      setCards(() =>
        cards
          .filter((card) => String(card.folder_id) === currentFolderId)
          .map((card) => card),
      );

      const selectedFolder = folderData.find(
        (folder) => String(folder.id) === currentFolderId,
      );
      setSelectedFolderName(selectedFolder.name);
    }
  };

  const handleSearchbar = (event, searchedText) => {
    event.preventDefault();

    searchedText
      ? setCards(() =>
          cards.filter((link) => link['description']?.includes(searchedText)),
        )
      : setCards(() => cards);
  };

  useEffect(() => {
    handleSearchParam();
  }, [searchParams]);

  const [cardState, setModalState] = useState(false);
  const modalRef = useRef();
  useOnClickOutside(modalRef, () => setModalState(false));

  const [modalTitle, setModalTitle] = useState('');
  const [modalBtnColor, setModalBtnColor] = useState('');
  const [modalDescription, setModalDescription] = useState('');
  const [modalBtnText, setModalBtnText] = useState('');

  const handleModalCardAdd = (e, text) => {
    if (!e || !text) return;
    setModalState(true);
    setModalTitle(MODAL_NAME[text].title);
    setModalBtnColor(MODAL_NAME[text].buttonColor);
    setModalDescription(MODAL_NAME[text].description);
    setModalBtnText(MODAL_NAME[text].buttonText);
  };
  const handleModalCardDelete = (e, text) => {
    setModalState(true);
    setModalTitle(MODAL_NAME[text].title);
    setModalBtnColor(MODAL_NAME[text].buttonColor);
    setModalDescription(MODAL_NAME[text].description);
    setModalBtnText(MODAL_NAME[text].buttonText);
  };

  return (
    <S.CardContainerBox>
      <Searchbar handleSearch={handleSearchbar} />

      {cards && cards.length === 0 ? (
        <NoLink />
      ) : (
        cards && (
          <>
            {cardState && (
              <Modal
                title={modalTitle}
                btnText={modalBtnText}
                modalText={modalDescription}
                btnColor={modalBtnColor}
                folderName="유용한 팁"
                setModalState={setModalState}
              />
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

            <CardList
              cards={cards}
              handleModalCardAdd={handleModalCardAdd}
              handleModalCardDelete={handleModalCardDelete}
            />
          </>
        )
      )}
    </S.CardContainerBox>
  );
};

export default FolderContainer;
