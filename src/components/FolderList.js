import { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal.js";


const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  ul {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  li {
    border: 1px solid var(--color-primary);
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
  }
  .add-folder {
    color: var(--color-primary);
  }

  @media screen and (max-width: 768px) {
    ul {
      flex-wrap: wrap;
    }
`;


function FolderList({ data, onClick }) {

  return (
    <StyledMenu>
      <ul>
        <li>전체</li>
        {data.map((folder) => 
          <li key={folder.id} onClick={() => onClick(folder.id)}>{folder.name}</li>
        )}
      </ul>
      <div className="add-folder">
        <Modal>폴더 추가+</Modal>
      </div>
    </StyledMenu>
  );
}

export default FolderList;