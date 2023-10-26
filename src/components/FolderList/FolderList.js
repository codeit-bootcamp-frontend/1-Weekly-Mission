import React, { useState, useEffect } from "react";
import "./FolderList.css";
import FolderAdd from "../../assets/icons/FolderAdd";
import ShareIcon from "../../assets/icons/Share";
import PenIcon from "../../assets/icons/Pen";
import DeleteIcon from "../../assets/icons/Delete";
import { BASE_API_URL } from "../../utils/apiConfig";

function ActionItem({ icon: IconComponent, label }) {
  return (
    <div className="action-item">
      <IconComponent />
      <span>{label}</span>
    </div>
  );
}

function FolderList() {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const userId = 1;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${BASE_API_URL}/users/${userId}/folders`);
        if (response.status === 200) {
          const data = await response.json();
          setFolders(data.data);
        }
      } catch (error) {}
    }

    fetchData();
  }, []);

  const handleFolderClick = (folderName) => {
    setSelectedFolder(folderName);
  };

  return (
    <div className="folders">
      <div className="folder-list">
        {folders.map((folder) => (
          <div
            className="folder-item"
            key={folder.id}
            onClick={() => handleFolderClick(folder.name)} // 폴더 클릭 이벤트 연결
          >
            {folder.name}
          </div>
        ))}
      </div>
      <div className="folder-add">
        폴더 추가
        <FolderAdd />
      </div>
      <span className="folder-select">{selectedFolder}</span>
      <div className="folder-actions">
        <div className="folder-actions">
          <ActionItem icon={ShareIcon} label="공유" />
          <ActionItem icon={PenIcon} label="이름 변경" />
          <ActionItem icon={DeleteIcon} label="삭제" />
        </div>
      </div>
    </div>
  );
}

export default FolderList;
