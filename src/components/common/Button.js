import styled from 'styled-components';

const AuthButton = styled.button`
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  color: var(--linkbrary-white);
  border: none;
  cursor: pointer;
`;

export default function Button({ type, className }) {
  return <AuthButton className={`button ${className}`}>{type}</AuthButton>;
}
