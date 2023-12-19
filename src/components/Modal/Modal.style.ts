import Image from 'next/image';
import styled from 'styled-components';
import { theme } from '@/src/styles/theme';

export const BackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9600;
  height: 1000%;
  width: 100%;
  left: 0;

  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
`;

export const Container = styled.div`
  z-index: 9700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 360px;
  padding: 32px 40px;
  gap: 24px;
  border-radius: 15px;
  border: 1px solid #ccd5e3;
  background: #fff;
  color: #373740;
`;

export const Img = styled(Image)`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 15px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${theme.color.purpleblue};
  background: ${theme.color.white};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 20px;
  width: 100%;
  border: none;
  border-radius: 8px;
  background: ${({ color }) =>
    color === 'blue'
      ? `linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)`
      : `${theme.color.linkbraryred}`};

  color: #f5f5f5;
  font-size: 16px;
  font-weight: 600;
`;
