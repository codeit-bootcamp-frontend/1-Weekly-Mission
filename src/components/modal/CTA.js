import styled from 'styled-components';

function CTA({ isSmall, children }) {
  return <Button small={isSmall}>{children}</Button>;
}

const Button = styled.button`
  width: ${({ small }) => (small ? '30rem' : '35rem')};
  padding: ${({ small }) => (small ? '1rem 1.6rem' : '1.6rem 2rem')};
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.8rem;
  background: var(--graBlueToSkyBlue);
`;

export default CTA;
