import { useState } from "react";
import * as S from "./FolderList.style";
import addIcon from "images/add.svg";
import addIconWhite from "images/add_white.svg";
import deleteIcon from "images/delete.svg";
import nameChangeIcon from "images/name-change.svg";
import shareIcon from "images/share.svg";
import Modal from "components/Modal";
import { ModalAddFolder, ModalDelete, ModalEdit, ModalShare } from "components/Modal/Modal";
import useRequest from "hooks/useRequest";

function FolderList({ getFolderId }) {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedName, setSelectedName] = useState("전체");
  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [modalIsOpen3, setModalIsOpen3] = useState(false);
  const [modalIsOpen4, setModalIsOpen4] = useState(false);

  const { data } = useRequest({ url: "/users/1/folders" });
  const folders = data?.data;

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
          <S.AddFolderButton onClick={() => setModalIsOpen4(true)}>
            <span>폴더 추가</span>
            <img className="notMobile" src={addIcon} alt="추가 아이콘" />
            <img className="onMobile" src={addIconWhite} alt="추가 아이콘" />
          </S.AddFolderButton>
          {modalIsOpen4 && (
            <Modal close={() => setModalIsOpen4(false)}>
              <ModalAddFolder />
            </Modal>
          )}
        </S.FolderListContainer>
      )}
      <S.CurrentFolderInfo>
        <span>{selectedName}</span>
        <S.OptionContainer selected={!selectedId}>
          <button onClick={() => setModalIsOpen1(true)}>
            <img src={shareIcon} alt="공유 아이콘" />
            <span>공유</span>
          </button>
          {modalIsOpen1 && (
            <Modal close={() => setModalIsOpen1(false)}>
              <ModalShare folderName={selectedName} />
            </Modal>
          )}
          <button onClick={() => setModalIsOpen2(true)}>
            <img src={nameChangeIcon} alt="이름 변경 아이콘" />
            <span>이름 변경</span>
          </button>
          {modalIsOpen2 && (
            <Modal close={() => setModalIsOpen2(false)}>
              <ModalEdit folderName={selectedName} />
            </Modal>
          )}
          <button onClick={() => setModalIsOpen3(true)}>
            <img src={deleteIcon} alt="삭제 아이콘" />
            <span>삭제</span>
          </button>
          {modalIsOpen3 && (
            <Modal close={() => setModalIsOpen3(false)}>
              <ModalDelete folderName={selectedName} />
            </Modal>
          )}
        </S.OptionContainer>
      </S.CurrentFolderInfo>
    </>
  );
}

export default FolderList;
