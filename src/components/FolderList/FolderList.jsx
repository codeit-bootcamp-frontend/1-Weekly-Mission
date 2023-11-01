import { getAPI } from "api";
import { useEffect, useState } from "react";
import * as S from "./FolderList.style";
import addIcon from "images/add.svg";
import addIconWhite from "images/add_white.svg";
import deleteIcon from "images/delete.svg";
import nameChangeIcon from "images/name-change.svg";
import shareIcon from "images/share.svg";
import Modal from "components/Modal";
import { ModalEdit } from "components/Modal/Modal";

function FolderList({ getFolderId }) {
  const [folders, setFolders] = useState();
  const [selectedId, setSelectedId] = useState(null);
  const [selectedName, setSelectedName] = useState("전체");

  const handleAllClick = () => {
    getFolderId("");
    setSelectedId(null);
    setSelectedName("전체");
  };

  const handleClick = (e) => {
    getFolderId(e.target.id);
    setSelectedId(e.target.id);
    setSelectedName(e.target.name);
  };

  const handleLoad = async () => {
    const result = await getAPI("/users/1/folders");
    const { data } = result;
    setFolders(data);
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      {folders && (
        <S.FolderListContainer>
          <S.FolderContainer>
            <S.Folder onClick={handleAllClick} to="/folder" selected={!selectedId}>
              전체
            </S.Folder>
            {folders.map((folder) => (
              <S.Folder onClick={handleClick} name={folder.name} id={folder.id} to={`/folder?folderId=${folder.id}`} key={folder.id} selected={+selectedId === folder.id}>
                {folder.name}
              </S.Folder>
            ))}
          </S.FolderContainer>
          <S.AddFolderButton>
            <span>폴더 추가</span>
            <img className="notMobile" src={addIcon} alt="추가 아이콘" />
            <img className="onMobile" src={addIconWhite} alt="추가 아이콘" />
          </S.AddFolderButton>
        </S.FolderListContainer>
      )}
      <S.CurrentFolderInfo>
        <span>{selectedName}</span>
        <S.OptionContainer selected={!selectedId}>
          <button>
            <img src={shareIcon} alt="공유 아이콘" />
            <span>공유</span>
          </button>
          <button onClick={openModal}>
            <img src={nameChangeIcon} alt="이름 변경 아이콘" />
            <span>이름 변경</span>
          </button>
          {modalIsOpen && <Modal close={closeModal}><ModalEdit /></Modal>}
          <button>
            <img src={deleteIcon} alt="삭제 아이콘" />
            <span>삭제</span>
          </button>
        </S.OptionContainer>
      </S.CurrentFolderInfo>
    </>
  );
}

export default FolderList;
