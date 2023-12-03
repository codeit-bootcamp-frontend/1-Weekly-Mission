import React, { useState, useEffect } from "react";
import styles from "./folder.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LinkInput from "@/components/LinkInput";
import CardList from "@/components/CardList";
import SearchBar from "@/components/SearchBar";
import FolderItem from "@/components/FolderItem";
import API from "@/utils/api";
import FolderAdd from "@/assets/icons/FolderAdd";
import ShareIcon from "@/assets/icons/Share";
import PenIcon from "@/assets/icons/Pen";
import DeleteIcon from "@/assets/icons/Delete";
import Dialog from "@/components/Dialog";

interface FolderProp {
  id: number;
  name: string;
}

const FolderPage = () => {
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const [selectedFolder, setSelectedFolder] = useState<string>("전체");
  const [folders, setFolders] = useState<FolderProp[]>([]);
  const [hasLinks, setHasLinks] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const userId = 1;

  const [showDialog, setShowDialog] = useState(false); // 다이얼로그 상태 관리 추가
  const [dialogType, setDialogType] = useState(""); // 어떤 다이얼로그를 보여줄지 결정하는 상태 추가

  type DialogType = "add" | "share" | "rename" | "delete";

  const openDialog = (type: DialogType) => {
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
      <SearchBar setSearchTerm={setSearchTerm} />
      {hasLinks && (
        <div className={styles.folders}>
          <div className={styles.folderList}>
            <div
              className={styles.folderItem}
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
          <div className={styles.folderAdd} onClick={() => openDialog("add")}>
            폴더 추가
            <FolderAdd />
          </div>
          <span className={styles.folderSelect}>{selectedFolder}</span>
          {selectedFolder !== "전체" && (
            <div className={styles.folderActions}>
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
        searchTerm={searchTerm}
      />
      {showDialog && <Dialog>{/* 다이얼로그 관련 내용 */}</Dialog>}
      <Footer />
    </div>
  );
};

interface ActionItemProps {
  icon: React.ElementType;
  label: string;
  onClick: () => void;
}

const ActionItem = ({
  icon: IconComponent,
  label,
  onClick,
}: ActionItemProps) => (
  <div className={styles.actionItem} onClick={onClick}>
    <IconComponent />
    <span>{label}</span>
  </div>
);

export default FolderPage;
