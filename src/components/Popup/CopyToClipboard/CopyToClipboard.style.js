import styled, { css, keyframes } from 'styled-components';

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

export const Container = styled.div`
  display: none;

  ${({ show }) =>
    show &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      animation: ${fadeOut} 2s ease-out;
      position: fixed;
      bottom: -75%;
      left: 50%;
      transform: translateX(-50%);
      width: 32rem;
      height: 6.4rem;
      padding: 1.9rem 3rem;
      border-radius: 0.8rem;
      background: rgba(0, 0, 0, 0.8);
      color: #fff;
      font-size: 1.3rem;
    `}
`;
