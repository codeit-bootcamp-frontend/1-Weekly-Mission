import styled from 'styled-components';

function Option({ icon, children }) {
  return (
    <OptionContainer>
      <Icon src={icon} />
      <p>{children}</p>
    </OptionContainer>
  );
}

export default Option;

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  p {
    color: var(--gray60);
    font-size: 1.4rem;
    font-weight: 600;
  }
`;

const Icon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;
