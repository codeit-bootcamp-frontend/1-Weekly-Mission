import styled, { css, keyframes } from "styled-components";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`;

export const BackGround = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 0 20px;
  background-color: #edf7ff;
  animation: ${({ $isFixed }) =>
    $isFixed === "fixed"
      ? css`
          ${fadeInUp} 1s
        `
      : ``};

  ${({ $isFixed }) =>
    $isFixed === "fixed" &&
    `
    position: fixed;
    bottom: 0px;
    z-index: 6000;
  `}
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  gap: 10px;
  padding: 12px 20px;
  border-radius: 15px;
  border: 1px solid var(--primary);
  background-color: var(--white);

  @media (max-width: 1199px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  flex-grow: 1;
  background-color: transparent;
  border-color: transparent;
`;

export const Button = styled.button`
  width: 8rem;
  padding: 10px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: #f5f5f5;
  font-size: 1.2rem;
  font-weight: 600;
  background: linear-gradient(135deg, var(--primary) 0%, #6ae3fe 100%);
`;
