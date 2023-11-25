import { useEffect, useRef } from "react";
import { DropDownList } from "components";
import usePopOver from "hooks/usePopOver";
import useModal from "hooks/useModal";
import kebab from "assets/kebab.svg";
import * as Styled from "./StyledDropDown";

function DropDown({ url, folderData }) {
  const kebabContainerRef = useRef(null);
  const { isOpen, openPopOver, closePopOver } = usePopOver();
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
  const addModal = [isAddOpen, openAdd, closeAdd];
  const deleteModal = [isDeleteOpen, openDelete, closeDelete];

  //드롭다운 버튼 클릭
  const handleKebabClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isOpen) {
      closePopOver();
    } else {
      openPopOver();
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target !== kebabContainerRef.current) {
        closePopOver();
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Styled.Container ref={kebabContainerRef}>
      <Styled.Kebab
        src={kebab}
        alt="카드 설정 보기"
        onClick={handleKebabClick}
      />
      {isOpen && (
        <DropDownList
          url={url}
          folderData={folderData}
          anchorRef={kebabContainerRef}
          addModal={addModal}
          deleteModal={deleteModal}
        />
      )}
    </Styled.Container>
  );
}

export default DropDown;
