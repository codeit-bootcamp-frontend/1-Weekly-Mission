import styled from 'styled-components';

export const FolderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin: 40px;
`;

export const FolderSearch = styled.div`
  display: flex;
  width: 1060px;
  padding: 15px 16px;
  align-items: center;
  border-radius: 10px;
  background-color: #f5f5f5;
  gap: 8px;
  @media (max-width: 1124px) {
    width: 100%;
  }
`;

export const FolderWrapper = styled.div`
  display: flex;
  width: 1060px;
  justify-content: space-between;
  @media (max-width: 1124px) {
    width: 100%;
  }
`;

export const FolderDIv = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const FolderPlusButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: white;
  color: #6d6afe;
  text-align: center;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 8px 12px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #6d6afe;
  background: #fff;
  &:hover {
    color: white;
    background-color: #6d6afe;
  }
`;

export const UsefulWrapper = styled.div`
  display: flex;
  width: 1060px;
  justify-content: space-between;
  @media (max-width: 1124px) {
    width: 100%;
  }
  @media (max-width: 767px) {
    display: grid;
    gap: 12px;
  }
`;

export const Useful = styled.div`
  color: #000;
  font-size: 24px;
  font-weight: 600;
`;

export const UsefulImgDiv = styled.div`
  display: flex;
  gap: 12px;
`;

export const UsefulButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: #9fa6b2;
  font-size: 14px;
  font-weight: 600;
`;

export const NoLink = styled.div`
  height: 100px;
  padding: 41px 0px 35px 0px;
  color: #000;
  font-weight: 400;
  line-height: 24px;
`;
