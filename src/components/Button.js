import styled from 'styled-components';

const StyledButton = styled.button`
  width: 128px;
  padding: 16px 20px;
  border-radius: 8px;
  background: var(--color-background);
  color: var(--color-white);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

function Button({ onclick, children }) {
  return (
    <StyledButton onclick={onclick}>{children}</StyledButton>
  );
}

export default Button;