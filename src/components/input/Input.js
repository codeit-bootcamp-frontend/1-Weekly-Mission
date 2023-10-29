import styled from "styled-components";
import { device } from "../styles";

const Input = ({ src, placeholder, children }) => {
  return (
    <InputContainer>
      <img src={src} alt="inputIcon" className="inputIcon" />
      <input className="inputContainer" placeholder={placeholder}></input>
      {children || <></>}
    </InputContainer>
  );
};
export default Input;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  padding: 1.5rem 1.6rem;
  border-radius: 1rem;
  background: #f5f5f5;
  align-items: center;
  box-sizing: border-box;
  @media all and ${device.mobile} {
    padding: 1.3rem 1.6rem;
  }

  .inputContainer {
    width: 100%;
    height: 2.3rem;
    padding-top: 0.5rem;
    @media all and ${device.mobile} {
      height: 1.7rem;
    }
  }

  .inputContainer::placeholder {
    color: #666;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.5rem;
    @media all and ${device.mobile} {
      font-size: 1.4rem;
      line-height: 1.7rem;
    }
  }

  .inputIcon {
    width: 1.6rem;
    height: 1.6rem;
  }
`;
