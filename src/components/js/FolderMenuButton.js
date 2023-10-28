import styled from "styled-components";

const MenuButton = styled.button`
  height: 35px;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  background-color: ${({ isActive }) =>
    isActive === true ? "#6d6afe" : "#fff"};
  color: ${({ isActive }) => (isActive === true ? "#fff" : "#000")};
  font-size: 16px;
  font-weight: 400;
  border-radius: 5px;
  border: 1px solid #6d6afe;

  &:hover {
    background-color: #6d6afe;
    color: #fff;
  }
`;

function FolderMenuButton({ children, onClick, id, name, isActive }) {
  const handleClick = (e) => {
    e.target.id ? onClick(e.target.id, e.target.name) : onClick("");
  };
  return (
    <>
      <MenuButton id={id} name={name} onClick={handleClick} isActive={isActive}>
        {children}
      </MenuButton>
    </>
  );
}

export default FolderMenuButton;
