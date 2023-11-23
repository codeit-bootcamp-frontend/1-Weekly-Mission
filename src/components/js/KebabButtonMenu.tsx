import styled from "styled-components";

function KebabPopOver({ modal, $url, setLink }: any) {
  const handleClick = (e: any) => {
    e.stopPropagation();
    const nextModal = e.target.getAttribute("modalName");
    setLink($url);
    modal(true, nextModal);
  };

  return (
    <MenuWrapper>
      <KebabMenu modalName="deleteLink" onClick={handleClick}>
        삭제하기
      </KebabMenu>
      <KebabMenu modalName="addLink" onClick={handleClick}>
        폴더에 추가
      </KebabMenu>
    </MenuWrapper>
  );
}

export default KebabPopOver;

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

const KebabMenu = styled.button`
  width: 100px;
  height: 31px;
  padding: 7px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: none;
  font-size: 1.4rem;
  color: #000;
  cursor: pointer;

  &:hover {
    background-color: var(--gray10);
    color: var(--primary);
    pointer-events: auto;
  }
`;
