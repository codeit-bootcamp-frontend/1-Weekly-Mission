import styled from "styled-components";

interface ButtonItem {
  $isActive: boolean;
}

function FolderMenuButton({ children, onClick, id, name, $isActive }: any) {
  const handleClick = (e: any) => {
    e.target.id ? onClick(e.target.id, e.target.name) : onClick("");
  };
  return (
    <>
      <MenuButton
        id={id}
        name={name}
        onClick={handleClick}
        $isActive={$isActive}
      >
        {children}
      </MenuButton>
    </>
  );
}

export default FolderMenuButton;

const MenuButton = styled.button<ButtonItem>`
  height: 35px;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  background-color: ${({ $isActive }) =>
    $isActive === true ? "var(--primary)" : "#fff"};
  color: ${({ $isActive }) => ($isActive === true ? "#fff" : "#000")};
  font-size: 16px;
  font-weight: 400;
  border-radius: 5px;
  border: 1px solid var(--primary);

  &:hover {
    background-color: var(--primary);
    color: #fff;
  }
`;
