import React from 'react';
import './FolderList.css';

function Folder({ data, handleSetSelectedFolder, selected }) {
  const changeSelectedFolder = (e) => {
    handleSetSelectedFolder(e.target.id);
  };

  return (
    <div
      className={`select-folder ${selected ? 'selected' : ''}`}
      onClick={changeSelectedFolder}
      id={data.id}
    >
      {data.name}
    </div>
  );
}

function FolderList({ folders, handleSetSelectedFolder, selectedFolder }) {
  const clearSlectedFolder = () => {
    handleSetSelectedFolder(null);
  };

  return (
    <div className="folder-container">
      <div className="folder-list-container">
        <div
          className={`select-folder ${selectedFolder ?? 'selected'}`}
          onClick={clearSlectedFolder}
        >
          전체
        </div>
        {folders.map((data) => (
          <Folder
            key={data.id}
            data={data}
            handleSetSelectedFolder={handleSetSelectedFolder}
            selected={String(data.id) === String(selectedFolder)}
          />
        ))}
        <div className="add-folder">폴더 추가 +</div>
      </div>
    </div>
  );
}

export default FolderList;
