import styled from "styled-components";

export const Container = styled.div<{ $error: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  height: 60px;
  padding: 18px 15px;
  border: 1px solid ${({ $error }) =>
    $error ? "var(--red)" : "var(--gray20)"};
  border-radius: 8px;
  background-color: var(--white)

  &:focus-within {
    border-color: var(--primary);
  }
`;

export const Input = styled.input`
  flex-grow: 1;
  line-height: 1.5rem;
  color: var(--gray100);
  border: none;
  outline: none;

  &::placeholder {
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--gray60);
  }
`;

export const Error = styled.span`
  display: inline-block;
  margin-top: 6.1px;
  font-size: 0.875rem;
  color: var(--red);
`;
