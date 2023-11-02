import { getAPI } from "api";
import { useEffect, useState } from "react";
import * as S from "./FolderList.style";
import addIcon from "images/add.svg";
import addIconWhite from "images/add_white.svg";
import deleteIcon from "images/delete.svg";
import nameChangeIcon from "images/name-change.svg";
import shareIcon from "images/share.svg";
import Modal from "components/Modal";
import { ModalAddFolder, ModalDelete, ModalEdit, ModalShare } from "components/Modal/Modal";

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

  const [modalIsOpen1, setModalIsOpen1] = useState(false);

  const openModal1 = () => {
    setModalIsOpen1(true);
  };

  const closeModal1 = () => {
    setModalIsOpen1(false);
  };

  const [modalIsOpen2, setModalIsOpen2] = useState(false);

  const openModal2 = () => {
    setModalIsOpen2(true);
  };

  const closeModal2 = () => {
    setModalIsOpen2(false);
  };

  const [modalIsOpen3, setModalIsOpen3] = useState(false);

  const openModal3 = () => {
    setModalIsOpen3(true);
  };

  const closeModal3 = () => {
    setModalIsOpen3(false);
  };

  const [modalIsOpen4, setModalIsOpen4] = useState(false);

  const openModal4 = () => {
    setModalIsOpen4(true);
  };

  const closeModal4 = () => {
    setModalIsOpen4(false);
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
          <S.AddFolderButton onClick={openModal4}>
            <span>폴더 추가</span>
            <img className="notMobile" src={addIcon} alt="추가 아이콘" />
            <img className="onMobile" src={addIconWhite} alt="추가 아이콘" />
          </S.AddFolderButton>
          {modalIsOpen4 && <Modal close={closeModal4}><ModalAddFolder /></Modal>}
        </S.FolderListContainer>
      )}
      <S.CurrentFolderInfo>
        <span>{selectedName}</span>
        <S.OptionContainer selected={!selectedId}>
          <button onClick={openModal1}>
            <img src={shareIcon} alt="공유 아이콘" />
            <span>공유</span>
          </button>
          {modalIsOpen1 && <Modal close={closeModal1}><ModalShare folderName={selectedName} /></Modal>}
          <button onClick={openModal2}>
            <img src={nameChangeIcon} alt="이름 변경 아이콘" />
            <span>이름 변경</span>
          </button>
          {modalIsOpen2 && <Modal close={closeModal2}><ModalEdit folderName={selectedName} /></Modal>}
          <button onClick={openModal3}>
            <img src={deleteIcon} alt="삭제 아이콘" />
            <span>삭제</span>
          </button>
          {modalIsOpen3 && <Modal close={closeModal3}><ModalDelete folderName={selectedName} /></Modal>}
        </S.OptionContainer>
      </S.CurrentFolderInfo>
    </>
  );
}

export default FolderList;
