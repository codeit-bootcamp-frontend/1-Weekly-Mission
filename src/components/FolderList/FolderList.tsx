import { useRouter } from "next/router";
import FolderAddButton from "src/components/FolderAddButton/FolderAddButton";
import FolderForm from "src/components/FolderForm/FolderForm";
import styled from "styled-components";

function FolderList({ folder, onClick }: FolderListProps) {
  const navigate = useRouter();

  return (
    <StyledWrapper>
      <StyledFolderWrapper>
        <FolderForm name={"전체"} onClick={() => navigate.push("/folder")} />
        {folder.map((data: any) => (
          <FolderForm
            key={data.id}
            name={data.name}
            onClick={() => navigate.push(`/folder?folderId=${data.id}`)}
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
