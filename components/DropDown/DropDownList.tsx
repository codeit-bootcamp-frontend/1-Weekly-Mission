import { MouseEvent, RefObject } from "react";
import { Modal, ModalContentName, AddFolderModal } from "@/components";
import useModal from "@/lib/hooks/useModal";
import ModalPortal from "@/lib/utils/Portal";
import { FoldersData } from "@/lib/types/data";
import * as Styled from "./StyledDropDown";

interface Props {
  url: string;
  folderData: FoldersData[];
  anchorRef: RefObject<HTMLDivElement>;
}

function DropDownList({ url, folderData, anchorRef }: Props) {
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

  const handleDeleteClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    openDelete();
  };

  const handleAddClick = (e: MouseEvent) => {
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
          trigger={<ModalContentName children={url} />}
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
