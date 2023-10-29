import styled from 'styled-components';

const ButtonStyle = styled.button`
  width: 128px,
  padding: 16px 20px,
  border-radius: 8px,
  background: linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%)),
  font-size: 18px,
  font-style: normal,
  font-weight: 600,
  line-height: normal
`;

function Button({ children }) {
  return (
    <ButtonStyle>{children}</ButtonStyle>
  );
}

export default Button;