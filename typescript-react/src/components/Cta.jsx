import styled from 'styled-components';

function Cta({ name }) {
  return <Button>{name}</Button>;
}

export default Cta;

const Button = styled.button`
  display: flex;
  width: 28rem;
  padding: 1.6rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.8rem;
  background: var(--gradation, linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%));
  color: var(--grey-light, #f5f5f5);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
