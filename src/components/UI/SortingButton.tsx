import * as React from "react";
import styled from "styled-components";
import { FolderContext } from "../../context/FolderContext";
import { ReactNode, useContext } from "react";

interface props {
  folderId: number;
  isActive?: boolean;
  handleClick: (buttonIndex: number) => void;
  buttonIndex: number;
  children: ReactNode;
}

function SortingButton({ folderId, isActive, handleClick, buttonIndex, children }: props) {
  const folderContext = useContext(FolderContext);

  if (!folderContext) return null;

  const { changeFolderId } = folderContext;

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
}

export default SortingButton;

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
