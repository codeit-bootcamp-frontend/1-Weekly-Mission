import styled from 'styled-components';
import { COLORS } from '@styles/color';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;

  background-color: rgba(0, 0, 0, 0.4);
`;

export const Wrapper = styled.div`
  overflow: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;

  outline: 0;
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  padding: 3.2rem 4rem;
  border: 0.1rem solid ${COLORS.GRAY_20};
  border-radius: 1.5rem;

  background: ${COLORS.WHITE};

  transform: translate(-50%, -50%);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
`;

export const Content = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 28rem;

  gap: 2.4rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  width: 28rem;

  gap: 0.8rem;
`;

export const Title = styled.p`
  color: ${COLORS.GRAY_100};
  font-weight: 700;
  font-size: 2rem;
`;

export const Subtitle = styled.p`
  color: ${COLORS.GRAY_60};
  font-size: 1.4rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 28rem;

  gap: 1.5rem;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 1.8rem 1.5rem;
  border: 0.1rem solid ${COLORS.GRAY_20};
  border-radius: 0.8rem;

  background: ${COLORS.WHITE};

  font-size: 1.6rem;
  line-height: 150%;

  &:focus {
    border-color: ${COLORS.PRIMARY};
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 1.6rem 2rem;
  border-radius: 0.8rem;

  color: ${COLORS.WHITE};
  font-weight: 600;
  font-size: 1.6rem;

  gap: 1rem;
`;

export const SubmitButton = styled(Button)`
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
`;

export const DeleteButton = styled(Button)`
  background: ${COLORS.RED};
`;

export const IconsBox = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 3.2rem;
`;

export const Icon = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  color: ${COLORS.GRAY_100};
  font-size: 1.3rem;
  line-height: 1.5rem;

  gap: 1rem;
`;

export const IconImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.2rem;
  border-radius: 3.7333rem;

  background: rgba(157, 157, 157, 0.04);

  gap: 1rem;

  img {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

export const KaKaotalkIconImgContainer = styled(IconImgContainer)`
  background: #fee500;
`;

export const FacebookIconImgContainer = styled(IconImgContainer)`
  background: #1877f2;
`;

export const FolderList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 28rem;

  gap: 0.4rem;
`;

export const FolderListItem = styled.div`
  display: flex;
  align-items: flex-start;

  width: 100%;
  padding: 0.8rem;

  color: ${COLORS.GRAY_100};
  font-size: 1.6rem;
  line-height: 150%;

  gap: 0.8rem;

  &:hover {
    border-radius: 0.8rem;
    background: ${COLORS.GRAY_0};
  }

  span {
    color: ${COLORS.GRAY_60};
    font-size: 1.4rem;
  }
`;
