import { Modal, ModalContentName, AddFolderModal } from "components";
import ModalPortal from "Portal";
import * as Styled from "./StyledDropDown";

function DropDownList({ url, folderData, anchorRef, addModal, deleteModal }) {
  const [isAddOpen, openAdd, closeAdd] = addModal;
  const [isDeleteOpen, openDelete, closeDelete] = deleteModal;

  const handleDeleteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    openDelete();
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    openAdd();
  };

  return (
    <>
      <ModalPortal container={anchorRef.current}>
        <Styled.Ul>
          <li>
            <Styled.Button onClick={handleDeleteClick} $select={isDeleteOpen}>
              삭제하기
            </Styled.Button>
          </li>
          <li>
            <Styled.Button onClick={handleAddClick} $select={isAddOpen}>
              폴더에 추가
            </Styled.Button>
          </li>
        </Styled.Ul>
      </ModalPortal>
      {isDeleteOpen && (
        <Modal
          title="링크 삭제"
          trigger={<ModalContentName contentName={url} />}
          closeModal={closeDelete}
          btnContent="삭제하기"
          color="red"
        />
      )}
      {isAddOpen && (
        <AddFolderModal
          url={url}
          closeModal={closeAdd}
          folderData={folderData}
        />
      )}
    </>
  );
}

export default DropDownList;
