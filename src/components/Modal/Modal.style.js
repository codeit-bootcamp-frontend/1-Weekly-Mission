import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Container = styled.div`
  z-index: 999999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 3.2rem 4rem;
  border-radius: 1.5rem;
  border: 0.1rem solid var(--gray20);
  background: var(--white);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
`;

export const Content = styled.div`
  width: 28rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  gap: 2.4rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 28rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.8rem;
`;

export const Title = styled.p`
  color: var(--gray100);
  font-size: 2rem;
  font-weight: 700;
`;

export const Subtitle = styled.p`
  color: var(--gray60);
  font-size: 1.4rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 28rem;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1.6rem;
  line-height: 150%;
  display: flex;
  padding: 1.8rem 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--gray20);
  background: var(--white);

  &:focus {
    border-color: var(--primary);
  }
`;

const Button = styled.button`
  width: 100%;
  display: flex;
  padding: 1.6rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  color: var(--white);
  font-weight: 600;
`;

export const SubmitButton = styled(Button)`
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
`;

export const DeleteButton = styled(Button)`
  background: var(--red);
`;

export const IconsBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3.2rem;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  color: var(--gray100);
  /* text-align: center; */
  font-size: 1.3rem;
  line-height: 1.5rem;
`;

export const IconImgContainer = styled.div`
  display: flex;
  padding: 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 3.7333rem;
  background: rgba(157, 157, 157, 0.04);

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
