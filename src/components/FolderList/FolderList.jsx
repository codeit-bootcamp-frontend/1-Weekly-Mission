import { useState } from "react";
import * as S from "./FolderList.style";
import addIcon from "images/add.svg";
import addIconWhite from "images/add_white.svg";
import Modal from "components/Modal";
import useRequest from "hooks/useRequest";
import ModalAddFolder from "components/Modal/ModalAddFolder";
import CurrentFolderInfo from "components/CurrentFolderInfo";

function FolderList({ getFolderId }) {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedName, setSelectedName] = useState("전체");
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
          <S.AddFolderButton onClick={() => setModalIsOpen(true)}>
            <span>폴더 추가</span>
            <img className="notMobile" src={addIcon} alt="추가 아이콘" />
            <img className="onMobile" src={addIconWhite} alt="추가 아이콘" />
          </S.AddFolderButton>
          {modalIsOpen && (
            <Modal close={() => setModalIsOpen(false)}>
              <ModalAddFolder />
            </Modal>
          )}
        </S.FolderListContainer>
      )}
      <CurrentFolderInfo selectedName={selectedName} selectedId={selectedId} />
    </>
  );
}

export default FolderList;
