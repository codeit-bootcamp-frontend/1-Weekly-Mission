import Check from 'assets/icon/check.svg';
import { styled } from 'styled-components';

const FolderList = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px;
  font-size: 1.6rem;
  column-gap: 8px;

  &:focus {
    background-color: var(--linkbrary-bg);
    background-image: url(${Check});
    background-repeat: no-repeat;
    background-position: 250px center;
    color: var(--primary);
  }
`;

const LinkCount = styled.p`
  font-size: 1.4rem;
  color: var(--gray9F);
`;

function ModalFolderList({ folders }) {
  return (
    <>
      {folders.map((folder) => (
        <FolderList key={folder.id}>
          {folder.name}
          <LinkCount>{folder.link?.count}개 링크</LinkCount>
        </FolderList>
      ))}
    </>
  );
}

export default ModalFolderList;
