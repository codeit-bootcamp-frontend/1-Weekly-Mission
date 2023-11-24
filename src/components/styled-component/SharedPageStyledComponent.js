import styled from 'styled-components';

export const MainContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  @media (max-width: 1124px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
