import styled from 'styled-components';
import { COLORS } from '@/styles/palettes';

export const AddLinkContainer = styled.div`
  width: 100%;
  max-width: 80rem;
  min-width: 32.5rem;
  padding: 1.6rem 2rem;
  border-radius: 1.5rem;
  border: 0.1rem solid ${COLORS.PRIMARY};
  background-color: ${COLORS.WHITE};
`;

export const AddLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const AddLinkInput = styled.input`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 1.2rem;
`;
