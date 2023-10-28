import FolderButton from "../FolderButton/FolderButton";
import { useState } from "react";
import "./FolderButtonList.style.css";

function FolderButtonList({ folderList, onChange }) {
  const [folderTitle, setFolderTitle] = useState("전체");
  const handleButton = (name, id) => {
    setFolderTitle(name);
    onChange(id);
  };
  const INITIAL_FOLDER = {
    id: "",
    name: "전체",
  };

  return (
    <div className="folder-buttons-section">
      <div className="folder-buttons-list">
        <div className="folder-button">
          <FolderButton folder={INITIAL_FOLDER} onChange={handleButton} />
        </div>
        {folderList && (
          <>
            {folderList.map((folder) => {
              return (
                <div key={folder.id} className="folder-button">
                  <FolderButton folder={folder} onChange={handleButton} />
                </div>
              );
            })}
          </>
        )}
      </div>
      <div className="folder-title">{folderTitle}</div>
    </div>
  );
}

export default FolderButtonList;
