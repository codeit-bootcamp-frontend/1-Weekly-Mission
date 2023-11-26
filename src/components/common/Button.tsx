import styled from 'styled-components';

interface AddButton {
  $color: string;
}

const AuthButton = styled.button<AddButton>`
  background: ${({ $color }) =>
    $color !== 'red'
      ? 'linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)'
      : 'var(--linkbrary-red)'};
  color: var(--linkbrary-white);
  border: none;
  cursor: pointer;
`;

export default function Button({ type, className, buttonColor }: any) {
  return (
    <AuthButton className={`button ${className}`} $color={buttonColor}>
      {type}
    </AuthButton>
  );
}
