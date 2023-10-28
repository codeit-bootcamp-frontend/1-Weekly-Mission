import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  gap: 3.2rem;

  @media (min-width: 768px) {
    gap: 4rem;
    padding: 0 3rem;
    margin: 4rem 0;
  }
`;

export default Main;
