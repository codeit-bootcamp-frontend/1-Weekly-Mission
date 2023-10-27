import styled from "styled-components";

const MenuButton = styled.button`
  font-family: Pretendard, sans-serif;
  padding: 8px 12px;
  cursor: pointer;
  background-color: #fff;
  font-size: #000;
  font-weight: 400;
  border-radius: 5px;
  border: 1px solid #6d6afe;
`;

function FolderMenuButton({ children }) {
  return (
    <>
      <MenuButton>{children}</MenuButton>
    </>
  );
}

export default FolderMenuButton;
