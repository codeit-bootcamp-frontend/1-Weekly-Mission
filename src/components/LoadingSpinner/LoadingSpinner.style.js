import styled, { keyframes } from "styled-components";
import spinnerImg from "../../images/spinner.png";
export const SpinnerWrap = styled.div`
  display: grid;
  justify-content: center;
  font-size: 1.6rem;
`;

const SpinnerAnimation = keyframes`
    100% {
      transform: rotate(360deg);
  
}`;
export const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-image: url("${spinnerImg}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  animation: ${SpinnerAnimation} 1.5s linear infinite;
`;
