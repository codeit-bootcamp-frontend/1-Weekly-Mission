import './folderPage.css';
import React, { useEffect, useState } from 'react';
import { getUserFolders, getUserLinks } from '../../api/folder';
import AddLinkInput from './components/addLinkInput/AddLinkInput';
import SearchBar from '../../components/searchBar/SearchBar';
import Card from '../../components/card/Card';
import EmptyPage from './components/emptyPage/EmptyPage';
import OptionButton from './components/optionButton/OptionButton';
import FloatingButton from '../../components/floatingButton/FloatingButton';
import { ALL_LINK_NAME, OPTION_ICONS } from './constant';

import addIcon from '../../assets/folder/add.svg';
import addPrimaryIcon from '../../assets/folder/addPrimaryColor.svg';
import SortButton from './components/sortButton/SortButton';
import useModal from '../../hooks/useModal';

export default function FolderPage() {
  const [links, setLinks] = useState([]);
  const [folders, setFolders] = useState([]);
  const [folderId, setFolderId] = useState(ALL_LINK_NAME);
  const { open, close, isModalOpen, Dialog } = useModal();

  const folderName =
    folderId === ALL_LINK_NAME
      ? ALL_LINK_NAME
      : folders?.find(({ id }) => id === folderId)?.name;

  const fetchUserFolders = async () => {
    const result = await getUserFolders();
    const { data } = result;
    setFolders(data);
  };

  const fetchUserLinks = async (id) => {
    const result = await getUserLinks(id);
    const { data } = result;
    setLinks(data);
  };

  useEffect(() => {
    fetchUserFolders();
  }, []);

  useEffect(() => {
    if (!folderId) return;
    fetchUserLinks(folderId);
  }, [folderId]);

  return (
    <div className="folder-container">
      <header className="folder-header">
        <AddLinkInput folders={folders} />
      </header>
      <main className="folder-main">
        <SearchBar />
        <section className="folder-content-section">
          <div className="folder-sort-add-buttons-container">
            <div className="folder-sort-buttons-container">
              <SortButton
                onClick={() => setFolderId(ALL_LINK_NAME)}
                isClicked={folderId === ALL_LINK_NAME}
                text="전체"
              />
              {folders &&
                folders.map((item) => (
                  <SortButton
                    key={item.id}
                    onClick={() => setFolderId(item.id)}
                    isClicked={item.id === folderId}
                    folderId={item.id}
                    text={item.name}
                  />
                ))}
            </div>
            <button type="button" className="folder-add-button" onClick={open}>
              폴더 추가
              <img
                src={addPrimaryIcon}
                alt="add-icon"
                className="folder-add-icon"
              />
            </button>
            <Dialog onClick={close} isModalOpen={isModalOpen}>
              <Dialog.Title>폴더 추가</Dialog.Title>
              <Dialog.Input />
              <Dialog.Button isAddButton>추가하기</Dialog.Button>
            </Dialog>
          </div>
          <div className="folder-category-container">
            <h1 className="folder-category">{folderName}</h1>
            <div className="folder-option-button-container">
              {folderName !== ALL_LINK_NAME
                ? OPTION_ICONS.map((item) => (
                    <OptionButton
                      key={item.id}
                      name={item.name}
                      alt={item.alt}
                      iconSrc={item.iconSrc}
                      folderName={folderName}
                    />
                  ))
                : null}
            </div>
          </div>
        </section>
        {links?.length === 0 ? (
          <EmptyPage />
        ) : (
          <div className="links-container">
            {links &&
              links.map((item) => <Card key={item.id} linkInfo={item} />)}
          </div>
        )}
        <div className="floating-action-button-container">
          <FloatingButton iconSrc={addIcon}>폴더 추가</FloatingButton>
        </div>
      </main>
    </div>
  );
}
