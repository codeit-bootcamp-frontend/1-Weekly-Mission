import { useState } from "react";
import styled from "styled-components";
import kebabIcon from "assets/kebab.svg";

const Modal = styled.div`
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

const Button = styled.button`
  padding: 7px 12px;
  font-size: 0.875rem;
  color: var(--color-text);
  background: none;
  border: none;
  cursor: pointer;
`;

const AddButton = styled(Button)`
  color: var(--color-primary);
  background: var(--color-primary-bg);
`;

export default function KebabMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalToggle = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <img src={kebabIcon} onClick={handleModalToggle} />
      {isOpen && (
        <Modal>
          <Button>삭제하기</Button>
          <AddButton>폴더에 추가</AddButton>
        </Modal>
      )}
    </>
  );
}
