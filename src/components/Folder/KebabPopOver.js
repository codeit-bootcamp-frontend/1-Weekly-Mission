import styled from 'styled-components';

export default function KebabPopOver({ kebabRef, onModalOpen, link }) {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <Container ref={kebabRef} onClick={handleClick}>
      <Div
        onClick={() => {
          onModalOpen('링크 삭제', link);
        }}
      >
        삭제하기
      </Div>
      <AddDiv
        onClick={() => {
          onModalOpen('폴더에 추가', link);
        }}
      >
        폴더에 추가
      </AddDiv>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  z-index: 2;
  background-color: white;
  width: 100px;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 7px;
`;

const AddDiv = styled(Div)`
  color: var(--linkbrary-primary-color);
  background-color: var(--linkbrary-gray-10);
`;
