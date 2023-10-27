import React from 'react';
import './folderPage.css';
import AddLinkInput from './components/addLinkInput/AddLinkInput';
import SortButton from './components/sortButton/SortButton';
import SORT_BUTTON_NAME from './constant';
import addIcon from '../../assets/folder/add.svg';
import SearchBar from '../../components/searchBar/SearchBar';

export default function FolderPage() {
  return (
    <div className="folder-container">
      <header className="folder-header">
        <AddLinkInput />
      </header>
      <section className="folder-content-section">
        <SearchBar />
        <div className="folder-sort-add-buttons-container">
          <div className="folder-sort-buttons-container">
            {SORT_BUTTON_NAME.map((item) => (
              <SortButton>{item}</SortButton>
            ))}
          </div>
          <button type="button" className="folder-add-button">
            폴더 추가
            <img src={addIcon} alt="add-icon" />
          </button>
        </div>
      </section>
    </div>
  );
}
