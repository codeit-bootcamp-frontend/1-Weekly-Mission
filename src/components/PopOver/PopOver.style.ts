import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
`;

export const Element = styled.div`
  display: flex;
  justify-content: center;
  padding: 7px 12px;

  &:hover {
    color: '#6d6afe';
    background-color: #e7effb;
  }
`;
