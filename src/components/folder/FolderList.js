import React from 'react';
import './FolderList.css';

function Folder({ data }) {
  return <div className="select-folder">{data.name}</div>;
}

function FolderList({ folders }) {
  return (
    <div className="folder-container">
      <div className="folder-list-container">
        <div className="select-folder selected">전체</div>
        {folders.map((data) => (
          <Folder key={data.id} data={data} />
        ))}
        <div className="add-folder">폴더 추가 +</div>
      </div>
    </div>
  );
}

export default FolderList;
