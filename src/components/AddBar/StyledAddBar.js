import styled from "styled-components";

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
