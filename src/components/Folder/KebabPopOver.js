import styled from 'styled-components';

export default function KebabPopOver({ kebabRef }) {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <Container ref={kebabRef} onClick={handleClick}>
      <Div>삭제하기</Div>
      <Div>폴더에 추가</Div>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  z-index: 2;
  background-color: white;
  width: 100px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 7px;
`;
