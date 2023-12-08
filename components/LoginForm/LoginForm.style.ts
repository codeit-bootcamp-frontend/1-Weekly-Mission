import styled from "styled-components";

export const Form = styled.form`
  display : flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
  margin-bottom: 32px;
  width: 400px;
`

export const Button = styled.button`
  display: flex;
  justify-content : center;
  align-items: center;
  padding: 16px 20px;
  border: none;
  border-radius : 8px;
  background : linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%);
  font-size: 18px;
  font-weight: 600;
  color: var(--gray-light);
  cursor: pointer;
`
