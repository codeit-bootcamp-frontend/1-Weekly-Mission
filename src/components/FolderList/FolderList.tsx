import FolderAddButton from "../../components/FolderAddButton/FolderAddButton";
import FolderForm from "../../components/FolderForm/FolderForm";
import { useNavigate } from "react-router-dom";
import React from "react";
import { styled } from "styled-components";

function FolderList({ folder, onClick }: FolderListProps) {
  const navigate = useNavigate();

  return (
    <StyledWrapper>
      <StyledFolderWrapper>
        <FolderForm name={"전체"} onClick={() => navigate("/folder")} />
        {folder.map((data: any) => (
          <FolderForm
            key={data.id}
            name={data.name}
            onClick={() => navigate(`/folder?folderId=${data.id}`)}
          />
        ))}
      </StyledFolderWrapper>
      <FolderAddButton onClick={onClick} />
    </StyledWrapper>
  );
}

export default FolderList;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    display: block;
  }
`;

const StyledFolderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  @media (max-width: 767px) {
    flex-wrap: wrap;
    flex-basis: 90%;
  }
`;
