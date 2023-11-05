import styled from "styled-components";
import closeBtnIMG from "assets/closebtn.svg";
import facebookShareImg from "assets/facebook-share.svg";
import kakaoShareImg from "assets/kakao-share.svg";
import linkShareImg from "assets/link-share.svg";

const SHARE = {
  facebook: facebookShareImg,
  kakao: kakaoShareImg,
  link: linkShareImg,
};

export const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Modal = styled.div`
  width: 35rem;
  z-index: 9999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  background-color: var(--white);
  border: 1px solid var(--gray20);
`;

export const ModalLabel = styled.h1`
  font-size: 1.6rem;
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 20px 15px;
  border-radius: 8px;
  border: 1px solid var(--primary);

  &::placeholder {
    color: var(--gray20);
  }
`;

export const ModalBtn = styled.button`
  width: 100%;
  height: 50px;
  margin-top: -10px;
  text-align: center;
  color: var(--white);
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
`;

export const ModalSnsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 35px;
`;

export const ModalSnsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: var(--gray100);
  font-size: 1.1rem;
`;

export const ModalSnsImg = styled.div`
  background-image: ${({ share }) => `url(${SHARE[share]})`};
  background-position: center;
  width: 42px;
  height: 42px;
`;

export const ModalCloseBtn = styled.div`
  background-image: url(${closeBtnIMG});
  background-position: center;
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
