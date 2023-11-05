import styled from "styled-components";

const FolderNav = ({ folders, selectedFolderId, handleClick }) => {
  return (
    <FolderButtons>
      <FolderItem
        className={`folder_item ${selectedFolderId === null ? "selected" : ""}`}
        onClick={() => handleClick(null)}
      >
        <div>전체</div>
      </FolderItem>
      {folders?.map((folder) => (
        <FolderItem
          key={folder.id}
          className={`folder_item ${
            selectedFolderId === folder.id ? "selected" : ""
          }`}
          onClick={() => handleClick(folder.id, folder.name)}
        >
          <div>{folder.name}</div>
        </FolderItem>
      ))}
    </FolderButtons>
  );
};

const FolderButtons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.8rem;
`;

const FolderItem = styled.button`
  display: flex;
  align-items: center;
  height: 3rem;
  padding: 0.8rem 1.2rem;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--primary);
  background: var(--linkbrary-white);
  color: var(--linkbrary-black);
  font-size: 1.6rem;

  &.selected {
    background: var(--primary);
    color: var(--linkbrary-white);
  }
`;

export default FolderNav;
