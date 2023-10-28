import styled from "styled-components";

export const Form = styled.div`
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
