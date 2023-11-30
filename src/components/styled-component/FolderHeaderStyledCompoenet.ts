import styled from 'styled-components';

export const FolderHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  background: #f0f6ff;
  padding: 60px 32px 90px 32px;
`;

export const FolderHeaderWrapper = styled.div`
  display: flex;
  width: 800px;
  padding: 16px 20px;
  gap: 8px;
  border-radius: 15px;
  border: 1px solid #6d6afe;
  background: #fff;
  justify-content: space-between;
`;

export const FolderHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const FolderHeaderInput = styled.input`
  width: 600px;
  color: #000;
  font-weight: 400;
  line-height: 24px;
  border: none;
  &:focus {
    outline: none;
  }
  @media (max-width: 1124px) {
    width: 100%;
  }
`;

export const FolderHeaderButton = styled.button`
  display: flex;
  width: 80px;
  padding: 10px 0;
  justify-content: center;
  gap: 10px;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  color: #f5f5f5;
  font-size: 14px;
  font-weight: 600;
  border: none;
`;
