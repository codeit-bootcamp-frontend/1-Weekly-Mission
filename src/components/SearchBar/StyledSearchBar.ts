import styled from "styled-components";
import closeBtnIMG from "assets/closebtn.svg";

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 80%;
  gap: 10px;
  padding: 15px 16px;
  border-radius: 10px;
  background: #f5f5f5;

  @media (max-width: 1199px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  flex-grow: 1;
  background-color: transparent;
  border-color: transparent;
`;

export const CloseBtn = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${closeBtnIMG});
  background-position: center;
  cursor: pointer;
`;
