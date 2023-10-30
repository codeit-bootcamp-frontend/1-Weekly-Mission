import styled from "styled-components";

const MenuWrapper = styled.div`
  width: 100px;
  display: flex;
  position: absolute;
  left: 299px;
  bottom: 40px;
  flex-direction: column;
  gap: 2px;
  z-index: 3;
  background-color: #fff;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
`;

const KebabMenu = styled.div`
  width: 100px;
  height: 31px;
  padding: 7px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  font-size: 1.4rem;
  color: #000;

  &:hover {
    background-color: var(--gray10);
    color: var(--primary);
    pointer-events: auto;
  }
`;

function KebabButtonMenu() {
  return (
    <MenuWrapper>
      <KebabMenu>삭제하기</KebabMenu>
      <KebabMenu>폴더에 추가</KebabMenu>
    </MenuWrapper>
  );
}

export default KebabButtonMenu;
