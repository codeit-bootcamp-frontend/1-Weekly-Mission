import styled from 'styled-components';

function KebabModal() {
  return (
    <Container>
      <Button>삭제하기</Button>
      <Button>폴더에 추가</Button>
    </Container>
  );
}

export default KebabModal;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 10;
  position: absolute;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
`;

const Button = styled.button`
  width: 100px;
  background-color: white;
  padding: 7px 12px;
  font-size: 1.4rem;
  border: none;
  overflow: visible;

  &:hover {
    background-color: var(--bg);
    color: var(--primary-color);
  }
`;
