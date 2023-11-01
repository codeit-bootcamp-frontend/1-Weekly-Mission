import styled from "styled-components";
import { FolderContext } from "../../context/FolderContext";
import { useContext } from "react";

const Button = styled.button`
  display: flex;
  padding: 0.8rem 1.2rem;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--primary);
  background: var(--white);

  &:hover {
    background: var(--gray10);
  }

  &.active {
    background: var(--primary);
    color: var(--white);
  }
`;

const SortingButton = ({ folderId, isActive, handleClick, buttonIndex, children }) => {
  const { changeFolderId } = useContext(FolderContext); // 컨텍스트에서 changeFolderId 함수를 가져옵니다.

  return (
    <Button
      onClick={() => {
        handleClick(buttonIndex);
        changeFolderId(folderId);
      }}
      className={isActive ? "active" : ""}
    >
      {children}
    </Button>
  );
};

export default SortingButton;
