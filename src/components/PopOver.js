import { styled } from "styled-components";

const Container = styled.div`
  z-index: 1;

  position: absolute;
  top: 100%;
  right: 0;

  width: 10rem;

  & button {
    width: 100%;
    padding: 0.7rem 1.2rem;
    font-size: 1.4rem;

    color: #000000;
    background-color: #ffffff;

    border: none;

    &:hover {
      color: #6d6afe;
      background-color: #e7effb;
    }
  }
`;

function PopOver() {
  const handleAddLinkClick = () => {};
  const handleDeleteLinkClick = () => {};

  return (
    <Container>
      <button onClick={handleDeleteLinkClick}>삭제하기</button>
      <button onClick={handleAddLinkClick}>폴더에 추가</button>
    </Container>
  );
}

export default PopOver;
