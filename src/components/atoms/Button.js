import { styled } from "styled-components";
import DeviceSizes from "../../utils/DeviceSizes";

const Button = styled.button`
  display: flex;
  width: 12.8rem;
  height: 5.4rem;
  padding: 1.6rem 2rem;
  border: 0;
  background: var(--button-bg-purpleblue-to-skyblue);
  color: var(--button-grey-light);
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  font-family: Pretendard;
  font-weight: 600;
  cursor: pointer;
  font-size: 1.8rem;
  ${DeviceSizes.mobile} {
    width: 8rem;
    height: 3.7rem;
    padding: 1rem 1.6rem;
    font-size: 1.4rem;
  }
`;

export default Button;
