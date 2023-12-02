import { BodyRegular3 } from '@/styles/typography';
import styled from 'styled-components';

const Button = styled.button`
  width: 8.3rem;
  height: 100%;

  padding: 10px 16px;
  border: none;
  border-radius: 8px;

  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  color: white;
  ${BodyRegular3};
`;

export { Button };
