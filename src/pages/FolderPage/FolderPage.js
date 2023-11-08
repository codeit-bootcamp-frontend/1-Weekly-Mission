import React, { useState, useEffect } from "react";
import "./FolderPage.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LinkInput from "../../components/LinkInput";
import CardList from "../../components/CardList";
import SearchBar from "../../components/SearchBar";
import FolderItem from "../../components/FolderItem";
import API from "../../utils/api";
import FolderAdd from "../../assets/icons/FolderAdd";
import ShareIcon from "../../assets/icons/Share";
import PenIcon from "../../assets/icons/Pen";
import DeleteIcon from "../../assets/icons/Delete";
import Dialog from "../../components/Dialog";

const FolderPage = () => {
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const [selectedFolder, setSelectedFolder] = useState("전체");
  const [folders, setFolders] = useState([]);
  const [hasLinks, setHasLinks] = useState(true);
  const userId = 1;

  const [showDialog, setShowDialog] = useState(false); // 다이얼로그 상태 관리 추가
  const [dialogType, setDialogType] = useState(""); // 어떤 다이얼로그를 보여줄지 결정하는 상태 추가

  const openDialog = (type) => {
    setDialogType(type);
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  useEffect(() => {
    const fetchData = async () => {
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
    };
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
          <div className="folder-add" onClick={() => openDialog("add")}>
            폴더 추가
            <FolderAdd />
          </div>
          <span className="folder-select">{selectedFolder}</span>
          {selectedFolder !== "전체" && (
            <div className="folder-actions">
              <ActionItem
                icon={ShareIcon}
                label="공유"
                onClick={() => openDialog("share")}
              />
              <ActionItem
                icon={PenIcon}
                label="이름 변경"
                onClick={() => openDialog("rename")}
              />
              <ActionItem
                icon={DeleteIcon}
                label="삭제"
                onClick={() => openDialog("delete")}
              />
            </div>
          )}
        </div>
      )}
      <CardList
        isFolderPage={true}
        folderId={selectedFolderId}
        updateHasLinks={setHasLinks}
      />
      {showDialog && (
        <Dialog>
          {dialogType === "share" && <Dialog.Title>폴더 공유</Dialog.Title>}
          {dialogType === "rename" && (
            <Dialog.Title>폴더 이름 변경</Dialog.Title>
          )}
          {dialogType === "delete" && <Dialog.Title>폴더 삭제</Dialog.Title>}
          {dialogType === "add" && <Dialog.Title>폴더 추가</Dialog.Title>}
          <Dialog.CloseButton onClick={closeDialog}>닫기</Dialog.CloseButton>
        </Dialog>
      )}
      <Footer />
    </div>
  );
};

const ActionItem = ({ icon: IconComponent, label, onClick }) => (
  <div className="action-item" onClick={onClick}>
    <IconComponent />
    <span>{label}</span>
  </div>
);

export default FolderPage;
