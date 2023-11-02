import { useState } from "react";
import { createPortal } from "react-dom";

import styled from "styled-components";
import kebabIcon from "assets/kebab.svg";
import ModalContainer from "./modal/ModalContainer";
import AddFolder from "./modal/AddFolder";
import DeleteFolder from "./modal/DeleteFolder";

const PopoverMenu = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  width: 6.25rem;
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  background: var(--color-white);
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
`;

const DeleteOption = styled.button`
  padding: 7px 12px;
  font-size: 0.875rem;
  color: var(--color-text);
  background: none;
  border: none;
  cursor: pointer;
`;

const AddOption = styled(DeleteOption)`
  color: var(--color-primary);
  background: var(--color-primary-bg);
`;

export default function KebabMenu() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [iseOpenModal, setIsOpenModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleMenuToggle = (e) => {
    e.preventDefault();
    setIsOpenMenu((prev) => !prev);
  };

  const handleModalOpen = (e) => {
    e.preventDefault();
    setIsOpenModal(true);
    setSelectedOption(e.target.id);
  };

  return (
    <>
      <img src={kebabIcon} onClick={handleMenuToggle} alt="memu" />
      {isOpenMenu && (
        <PopoverMenu onClick={handleModalOpen}>
          <DeleteOption id="deleteLink">삭제하기</DeleteOption>
          <AddOption id="addLink">폴더에 추가</AddOption>
        </PopoverMenu>
      )}

      {iseOpenModal &&
        createPortal(
          <ModalContainer onClose={() => setIsOpenModal(false)}>
            {selectedOption === "addLink" ? (
              <AddFolder />
            ) : (
              <DeleteFolder currentFolderName="test" />
            )}
          </ModalContainer>,
          document.getElementById("portal"),
        )}
    </>
  );
}
