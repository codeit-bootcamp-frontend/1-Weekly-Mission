import styled, { keyframes } from "styled-components";
import spinnerImg from "../../images/spinner.png";
const StyledSpinner = keyframes`
    100% {
      transform: rotate(360deg);
  
}`;
const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-image: url("${spinnerImg}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  animation: ${StyledSpinner} 1.5s linear infinite;
`;

export default Spinner;
