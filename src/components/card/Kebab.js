import { useState, useRef, useEffect } from "react";
import DeleteLinkModal from "../modal/DeleteLinkModal";
import AddLinkModal from "../modal/AddLinkModal";
import styled from "styled-components";
import kebab from "../../image/kebab.svg";

const Kebab = ({ link }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const popoverRef = useRef();

  const handleTogglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setIsPopoverOpen(false);
    }
  };

  const openModal = (type) => {
    setModalType(type);
    setIsPopoverOpen(false); // 모달을 열 때 팝오버를 닫기
  };

  const closeModal = () => {
    setModalType(null);
  };

  useEffect(() => {
    if (isPopoverOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopoverOpen]);

  return (
    <KebabContainer>
      <ToggleKebab
        src={kebab}
        alt="kebab button"
        onClick={handleTogglePopover}
      />
      <Popover ref={popoverRef} isOpen={isPopoverOpen}>
        <Button onClick={() => openModal("delete")}>삭제하기</Button>
        <Button onClick={() => openModal("add")}>폴더에 추가</Button>
      </Popover>

      {modalType === "delete" && (
        <DeleteLinkModal
          isOpen={true}
          onRequestClose={closeModal}
          name={link}
        />
      )}

      {modalType === "add" && (
        <AddLinkModal isOpen={true} closeModal={closeModal} link={link} />
      )}
    </KebabContainer>
  );
};

const KebabContainer = styled.div`
  position: relative;
`;

const ToggleKebab = styled.img`
  cursor: pointer;
  width: 2.1rem;
  height: 1.7rem;
`;

const Popover = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  width: 100px;
  position: absolute;
  top: 20px;
  left: 0;
  background: var(--linkbrary-white);
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  border: none;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 7px 12px;
  border: none;
  background: transparent;

  &:hover {
    background: var(--gray40);
    color: var(--primary);
  }
`;

export default Kebab;
