import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AddFolderBtn,
  EditFolderTools,
  ModalEdit,
  ModalAdd,
  ModalDelete,
  ModalShare,
} from "components";
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

const FolderLists = ({ folderData, id }) => {
  const [folderTitle, setFolderTitle] = useState(() => {
    const idFolder = folderData.filter((data) => data.id === parseInt(id));
    if (idFolder[0]?.name) {
      return idFolder[0]["name"];
    } else {
      return "전체";
    }
  });
  const [isEditModal, setIsEditModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isAddModal, setIsAddModal] = useState(false);
  const [isShareModal, setIsShareModal] = useState(false);
  const folderId = id ? id : "전체";

  const handleBtnClick = (dataName) => {
    dataName === "전체" ? setFolderTitle("전체") : setFolderTitle(dataName);
  };

  const handleAddModalClick = () => {
    setIsAddModal(!isAddModal);
  };

  const handleAddModalClose = () => {
    setIsAddModal(!isAddModal);
  };

  const handleEditModalClick = () => {
    setIsEditModal(!isEditModal);
  };

  const handleEditModalClose = () => {
    setIsEditModal(!isEditModal);
  };

  const handleDeleteModalClick = () => {
    setIsDeleteModal(!isDeleteModal);
  };

  const handleDeleteModalClose = () => {
    setIsDeleteModal(!isDeleteModal);
  };

  const handleShareModalClick = () => {
    setIsShareModal(!isShareModal);
  };

  const handleShareModalClose = () => {
    setIsShareModal(!isShareModal);
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
  }, [id]);

  return (
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
        <AddFolderBtn modalOpen={handleAddModalClick} />
      </Styled.FolderBlock>
      <Styled.TitleBlock>
        <Styled.Title>{folderTitle}</Styled.Title>
        {folderTitle === "전체" || (
          <EditFolderTools
            modalOpen={[
              handleShareModalClick,
              handleEditModalClick,
              handleDeleteModalClick,
            ]}
          />
        )}
      </Styled.TitleBlock>
      {isEditModal && <ModalEdit modalClose={handleEditModalClose} />}
      {isAddModal && <ModalAdd modalClose={handleAddModalClose} />}
      {isDeleteModal && <ModalDelete modalClose={handleDeleteModalClose} />}
      {isShareModal && <ModalShare modalClose={handleShareModalClose} />}
    </Styled.Container>
  );
};

export default FolderLists;
