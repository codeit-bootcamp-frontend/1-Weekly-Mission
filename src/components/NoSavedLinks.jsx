import styled from 'styled-components';

function NoSavedLinks() {
  return (
    <Container>
      <p>저장된 링크가 없습니다.</p>
    </Container>
  );
}

export default NoSavedLinks;

const Container = styled.div`
  display: flex;
  width: 106rem;
  height: 10rem;
  padding: 4.1rem 0 3.5rem 0;
  justify-content: center;
  align-items: center;

  p {
    color: #000;
    text-align: center;
    font-size: 1.6rem;
    line-height: 24px;
  }
`;
