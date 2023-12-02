import Image from "next/image";
import styled from "styled-components";

export const Form = styled.form`
  margin-top: 50px;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Button = styled.button`
  width: 150px;
  height: 50px;
`;

export const InputTag = styled.input`
  width: 200px;
  height: 50px;
  padding: 10px;
  color: black;
  font-size: 16px;
  line-height: 23px;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: white;

  & :focus {
    border: 1px solid blue;
    outline: none;
  }
`;

export const EyesOff = styled(Image)`
  cursor: pointer;
`;

export const ErrMsg = styled.span`
  width: 100%;
`;
