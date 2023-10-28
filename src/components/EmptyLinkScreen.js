import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 106rem;
  height: 10rem;
  padding: 4.1rem 0px 3.5rem 0px;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  p {
    text-align: center;
    font-size: 1.6rem;
    line-height: 2.4rem; /* 150% */
  }
`

const EmptyLinkScreen = () => {
  return (
    <Container>
      <p>저장된 링크가 없습니다</p>
    </Container>
  )
}

export default EmptyLinkScreen;