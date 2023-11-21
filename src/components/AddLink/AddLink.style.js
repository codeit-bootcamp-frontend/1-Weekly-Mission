import styled from 'styled-components';
import { COLORS } from 'styles/palette';

export const AddLinkContainer = styled.div`
  border: 1px solid #000;
  width: 100%;
  padding: 1.6rem 2rem;
  border-radius: 1.5rem;
  border: 0.1rem solid ${COLORS.PRIMARY};
  background: var(--linkbrary-white, #FFF);
`;

export const AddLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const AddLinkIcon = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1.2rem;
`;

export const AddLinkInput = styled.input`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;