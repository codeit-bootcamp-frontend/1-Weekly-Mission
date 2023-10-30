import React, { useState, useEffect } from "react";
import "../components/FolderItem/FolderItem.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LinkInput from "../components/LinkInput";
import CardList from "../components/CardList";
import SearchBar from "../components/SearchBar";
import FolderItem from "../components/FolderItem";
import API from "../utils/api";
import FolderAdd from "../assets/icons/FolderAdd";
import ShareIcon from "../assets/icons/Share";
import PenIcon from "../assets/icons/Pen";
import DeleteIcon from "../assets/icons/Delete";

const FolderPage = () => {
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const [selectedFolder, setSelectedFolder] = useState("전체");
  const [folders, setFolders] = useState([]);
  const [hasLinks, setHasLinks] = useState(true);
  const userId = 1;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(API.USER.FOLDERS(userId));
        if (!response.ok) {
          throw new Error(`Server responded with ${response.status}`);
        }

        const { data } = await response.json();
        if (data) {
          setFolders(data);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar isFolderPage={true} />
      <LinkInput />
      <SearchBar />
      {hasLinks && (
        <div className="folders">
          <div className="folder-list">
            <div
              className="folder-item"
              onClick={() => {
                setSelectedFolderId(null);
                setSelectedFolder("전체");
              }}
            >
              전체
            </div>
            {folders.map((folder) => (
              <FolderItem
                key={folder.id}
                id={folder.id}
                name={folder.name}
                onFolderClick={(folderId) => {
                  setSelectedFolderId(folderId);
                  setSelectedFolder(folder.name);
                }}
              />
            ))}
          </div>
          <div className="folder-add">
            폴더 추가
            <FolderAdd />
          </div>
          <span className="folder-select">{selectedFolder}</span>
          {selectedFolder !== "전체" && (
            <div className="folder-actions">
              <ActionItem icon={ShareIcon} label="공유" />
              <ActionItem icon={PenIcon} label="이름 변경" />
              <ActionItem icon={DeleteIcon} label="삭제" />
            </div>
          )}
        </div>
      )}
      <CardList
        isFolderPage={true}
        folderId={selectedFolderId}
        updateHasLinks={setHasLinks}
      />
      <Footer />
    </div>
  );
};

function ActionItem({ icon: IconComponent, label }) {
  return (
    <div className="action-item">
      <IconComponent />
      <span>{label}</span>
    </div>
  );
}

export default FolderPage;
