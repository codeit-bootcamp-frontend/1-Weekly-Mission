import React, { useEffect, useState } from 'react';
import './folderPage.css';
import AddLinkInput from './components/addLinkInput/AddLinkInput';
import SortButton from './components/sortButton/SortButton';
import addIcon from '../../assets/folder/add.svg';
import SearchBar from '../../components/searchBar/SearchBar';
import { getUserFolders, getUserLinks } from '../../api/folder';
import Card from '../../components/card/Card';

export default function FolderPage() {
  const [links, setLinks] = useState([]);
  const [folders, setFolders] = useState([]);

  useEffect(async () => {
    const result = await getUserFolders();
    const { data } = result;
    setFolders(data);
  }, []);

  useEffect(async () => {
    const result = await getUserLinks();
    const { data } = result;
    setLinks(data);
  }, []);

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
              <SortButton>전체</SortButton>
              {folders &&
                folders.map((item) => (
                  <div key={item.id}>
                    <SortButton>{item.name}</SortButton>
                  </div>
                ))}
            </div>
            <button type="button" className="folder-add-button">
              폴더 추가
              <img src={addIcon} alt="add-icon" />
            </button>
          </div>
          <h1 className="folder-category">카테고리</h1>
        </section>
        <div className="links-container">
          {links &&
            links.map((item) => (
              <div key={item.id}>
                <Card linkInfo={item} />
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}
