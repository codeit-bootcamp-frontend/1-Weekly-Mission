import styled, { css } from 'styled-components';
import { COLORS } from 'styles/palette';

export const FolderButton = styled.button`
  padding: 0.6rem 1rem;
  height: 3rem;
  border-radius: 0.5rem;
  border: 1px solid ${COLORS['LB_PRIMARY']};
  font-size: 1.4rem;
  font-weight: 400;

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${COLORS['LB_PRIMARY']};
      color: #fff;
    `}
`;
