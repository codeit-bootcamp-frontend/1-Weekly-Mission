import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  border: 1px solid var(--gray-20);
  background-color: var(--gray-10);
  border-radius: 8px;

  span {
    color: var(--gray-100);
    font-size: 14px;
    font-weight: 400;
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 16px;
  cursor: pointer;
`;

export const ImageBox = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;
