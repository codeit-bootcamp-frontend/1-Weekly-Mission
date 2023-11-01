import styled from 'styled-components';
import { CHOICES } from '../../constants/default';

function ChoiceBar() {
  return (
    <Box>
      {CHOICES.map((choice) => (
        <Wrapper key={choice.text}>
          <img src={choice.src} alt={choice.alt} />
          <Text>{choice.text}</Text>
        </Wrapper>
      ))}
    </Box>
  );
}

export default ChoiceBar;

const Box = styled.div`
  display: flex;
  gap: 12px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const Text = styled.p`
  color: var(--gray-60);
  font-size: 1.4rem;
  font-weight: 600;
`;
