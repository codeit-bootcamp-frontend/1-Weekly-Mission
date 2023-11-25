import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AddFolderBtn,
  EditFolderTools,
  Modal,
  ShareModal,
  ModalInput,
  ModalContentName,
} from "components";
import useModal from "hooks/useModal";
import * as Styled from "./StyledFolderLists";

const FolderList = ({ data, onClick, folderId }) => {
  return (
    <Link to={`/folder/${data.id}`}>
      <Styled.Btn
        selected={folderId === String(data.id)}
        onClick={() => onClick(data.name)}
      >
        {data.name}
      </Styled.Btn>
    </Link>
  );
};

const FolderLists = ({ linksData, folderData, id }) => {
  const [folderTitle, setFolderTitle] = useState(() => {
    const idFolder = folderData.filter((data) => data.id === parseInt(id));
    if (idFolder[0]?.name) {
      return idFolder[0]["name"];
    } else {
      return "전체";
    }
  });
  const {
    isOpen: isShareOpen,
    openModal: openShare,
    closeModal: closeShare,
  } = useModal();
  const {
    isOpen: isChangeOpen,
    openModal: openChange,
    closeModal: closeChange,
  } = useModal();
  const {
    isOpen: isAddOpen,
    openModal: openAdd,
    closeModal: closeAdd,
  } = useModal();
  const {
    isOpen: isDeleteOpen,
    openModal: openDelete,
    closeModal: closeDelete,
  } = useModal();
  const folderId = id ? id : "전체";

  const handleBtnClick = (dataName) => {
    dataName === "전체" ? setFolderTitle("전체") : setFolderTitle(dataName);
  };

  useEffect(() => {
    (() => {
      const idFolder = folderData.filter((data) => data.id === parseInt(id));
      if (idFolder[0]?.name) {
        setFolderTitle(idFolder[0]?.name);
      } else {
        setFolderTitle("전체");
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <Styled.Container>
        <Styled.FolderBlock>
          <Styled.BtnBox>
            <Link to="/folder">
              <Styled.Btn
                selected={folderId === folderTitle}
                onClick={() => handleBtnClick("전체")}
              >
                전체
              </Styled.Btn>
            </Link>
            {folderData.map((data) => {
              return (
                <FolderList
                  key={data.id}
                  data={data}
                  folderId={folderId}
                  onClick={handleBtnClick}
                />
              );
            })}
          </Styled.BtnBox>
          <AddFolderBtn modalOpen={openAdd} />
        </Styled.FolderBlock>
        {linksData.length === 0 || (
          <Styled.TitleBlock>
            <Styled.Title>{folderTitle}</Styled.Title>
            {folderTitle === "전체" || (
              <EditFolderTools
                modalOpen={[openShare, openDelete, openChange]}
              />
            )}
          </Styled.TitleBlock>
        )}
      </Styled.Container>
      {isChangeOpen && (
        <Modal
          title="폴더 이름 변경"
          trigger={<ModalInput />}
          closeModal={closeChange}
          btnContent="변경하기"
          color="blue"
        />
      )}
      {isAddOpen && (
        <Modal
          title="폴더 추가"
          trigger={<ModalInput />}
          closeModal={closeAdd}
          btnContent="추가하기"
          color="blue"
        />
      )}
      {isDeleteOpen && (
        <Modal
          title="폴더 삭제"
          trigger={<ModalContentName contentName={folderTitle} />}
          closeModal={closeDelete}
          btnContent="삭제하기"
          color="red"
        />
      )}
      {isShareOpen && <ShareModal closeModal={closeShare} />}
    </>
  );
};

export default FolderLists;
