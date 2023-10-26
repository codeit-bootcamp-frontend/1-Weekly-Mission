import styled from "styled-components";

const StyledButton = styled.button`
  color: #f5f5f5;
  width: 128px;
  height: 54px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 16px 20px;
  background: linear-gradient(
    90deg,
    rgba(109, 106, 254, 1),
    rgba(106, 227, 254, 1)
  );
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
`;

export function Button({ name }) {
  return <StyledButton>{name}</StyledButton>;
}
