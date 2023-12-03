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

export const MainContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const MainSearch = styled.div`
  display: flex;
  width: 1060px;
  padding: 15px 16px;
  align-items: center;
  border-radius: 10px;
  background-color: #f5f5f5;
  gap: 10px;
  @media (max-width: 1124px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  color: #666;
  width: 800px;
  background-color: #f5f5f5;
  font-weight: 400;
  line-height: 24px;
  border: none;
  &:focus {
    outline: none;
  }
`;
