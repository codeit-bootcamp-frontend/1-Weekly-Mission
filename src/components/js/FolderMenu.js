import styled from "styled-components";
import addIcon from "../../Assets/add.png";
import FolderMenuButton from "./FolderMenuButton";

const MenuList = styled.ul`
  display: flex;
  gap: 8px;
`;

const Wrapper = styled.div`
  width: 1060px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  gap: 8px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

const AddFolderButton = styled.span`
  color: #6d6afe;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
`;

function FolderMenu({ folders }) {
  if (!folders) return null;
  return (
    <Wrapper>
      <MenuList>
        <FolderMenuButton>전체</FolderMenuButton>
        {folders.map((folder) => {
          return (
            <li>
              <FolderMenuButton>{folder.name}</FolderMenuButton>
            </li>
          );
        })}
      </MenuList>
      <Container>
        <AddFolderButton>폴더 추가</AddFolderButton>
        <Icon src={addIcon} alt="Add_Button" />
      </Container>
    </Wrapper>
  );
}

export default FolderMenu;
