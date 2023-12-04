import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 18px 15px;
  border-radius: 0.5rem;
  border: 1px solid var(--color-primary);
  outline: none;

  &:focus {
    border: 1px solid var(--color-gray-20);
  }
`;

export const EyeIcon = styled.img`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  margin: 0;
  color: var(--color-red);
  font-size: 0.875rem;
`;
