import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  gap: 32px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  color: #373740;
  font-family: Inter;
  font-size: 13px;
  font-weight: 400;
  line-height: 15px;
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 37.33px;
  background: ${({ color }) => color};
`;

export const Img = styled(Image)`
  margin: 12px;
  cursor: pointer;
`;
