import styled from 'styled-components';

const EmptyLinkScreen = ({ children }) => {
  return (
    <>
      <Container>
        <p>{children}</p>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  width: auto;
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
`;

export default EmptyLinkScreen;
