import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './folderPage.css';
import AddLinkInput from './components/addLinkInput/AddLinkInput';
import SortButton from './components/sortButton/SortButton';
import addIcon from '../../assets/folder/add.svg';
import SearchBar from '../../components/searchBar/SearchBar';
import { getUserFolders, getUserLinks } from '../../api/folder';
import Card from '../../components/card/Card';
import EmptyPage from './components/emptyPage/EmptyPage';
import OptionButton from './components/optionButton/OptionButton';
import OPTION_ICON_NAME from './constant';

export default function FolderPage() {
  const [links, setLinks] = useState([]);
  const [folders, setFolders] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const initFolderId = searchParams.get('folderId');
  const [folderId, setFolderId] = useState(initFolderId || null);
  const [isClicked, setIsClicked] = useState(false);
  const [categoryTitle, setCategoryTitle] = useState('전체');

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
    fetchUserLinks(folderId);
  }, [folderId]);

  return (
    <div className="folder-container">
      <header className="folder-header">
        <AddLinkInput />
      </header>
      <main className="folder-main">
        <SearchBar />
        <section className="folder-content-section">
          <div className="folder-sort-add-buttons-container">
            <div className="folder-sort-buttons-container">
              <SortButton
                setSearchParams={setSearchParams}
                setLinks={setLinks}
                setFolderId={setFolderId}
                setIsClicked={setIsClicked}
                fetchUserLinks={fetchUserLinks}
                isClicked={isClicked}
                setCategoryTitle={setCategoryTitle}
              >
                전체
              </SortButton>
              {folders &&
                folders.map((item) => (
                  <div key={item.id}>
                    <SortButton
                      setSearchParams={setSearchParams}
                      setLinks={setLinks}
                      setFolderId={setFolderId}
                      setIsClicked={setIsClicked}
                      isClicked={item.id === folderId}
                      folderId={item.id}
                      setCategoryTitle={setCategoryTitle}
                    >
                      {item.name}
                    </SortButton>
                  </div>
                ))}
            </div>
            <button type="button" className="folder-add-button">
              폴더 추가
              <img src={addIcon} alt="add-icon" />
            </button>
          </div>
          <div className="folder-category-container">
            <h1 className="folder-category">{categoryTitle}</h1>
            <div className="folder-option-button-container">
              {OPTION_ICON_NAME.map((item) => (
                <OptionButton
                  name={item.name}
                  alt={item.alt}
                  iconSrc={item.iconSrc}
                />
              ))}
            </div>
          </div>
        </section>
        {links.length === 0 ? (
          <EmptyPage />
        ) : (
          <div className="links-container">
            {links &&
              links.map((item) => (
                <div key={item.id}>
                  <Card linkInfo={item} />
                </div>
              ))}
          </div>
        )}
      </main>
    </div>
  );
}
