import React from 'react';
import './FolderList.css';

function Folder({ data, handleSetSelectedFolder, selected }) {
  const changeSelectedFolder = (e) => {
    const { id, name } = e.target.dataset;
    handleSetSelectedFolder({ id, name });
  };

  return (
    <div
      className={`select-folder ${selected ? 'selected' : ''}`}
      onClick={changeSelectedFolder}
      data-id={data.id}
      data-name={data.name}
    >
      {data.name}
    </div>
  );
}

function FolderList({ folders, handleSetSelectedFolder, selectedFolderId }) {
  const clearSlectedFolder = () => {
    handleSetSelectedFolder(null);
  };

  return (
    <div className="folder-container">
      <div className="folder-list-container">
        <div
          className={`select-folder ${selectedFolderId ?? 'selected'}`}
          onClick={clearSlectedFolder}
        >
          전체
        </div>
        {folders.map((data) => (
          <Folder
            key={data.id}
            data={data}
            handleSetSelectedFolder={handleSetSelectedFolder}
            selected={String(data.id) === String(selectedFolderId)}
          />
        ))}
        <div className="add-folder">폴더 추가 +</div>
      </div>
    </div>
  );
}

export default FolderList;
