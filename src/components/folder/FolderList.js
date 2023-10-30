import React from 'react';
import './FolderList.css';

function Folder({ data, setSelectedFolder, selected }) {
  const handleChangeSelectedFolder = (e) => {
    setSelectedFolder(e.target.id);
  };

  return (
    <div
      className={`select-folder ${selected ? 'selected' : ''}`}
      onClick={handleChangeSelectedFolder}
      id={data.id}
    >
      {data.name}
    </div>
  );
}

function FolderList({ folders, setSelectedFolder, selectedFolder }) {
  const clearSlectedFolder = () => {
    setSelectedFolder(null);
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
            setSelectedFolder={setSelectedFolder}
            selected={String(data.id) === String(selectedFolder)}
          />
        ))}
        <div className="add-folder">폴더 추가 +</div>
      </div>
    </div>
  );
}

export default FolderList;
