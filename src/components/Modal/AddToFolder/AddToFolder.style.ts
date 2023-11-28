import styled, { css } from 'styled-components';
import { COLORS } from '@styles/palette';

export const FoldersContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Folder = styled.button<{ $selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem;
  width: 100%;
  border-radius: 0.8rem;

  &:hover {
    background: ${COLORS.LB_BACKGROUND};
    h2 {
      color: ${COLORS.LB_PRIMARY};
    }
  }

  ${({ $selected }) =>
    $selected &&
    css`
      background: ${COLORS.LB_BACKGROUND};
      h2 {
        color: ${COLORS.LB_PRIMARY};
      }
    `}
`;

export const FolderTitle = styled.h2`
  color: ${COLORS.LB_GRAY_100};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

export const FolderDescription = styled.span`
  color: ${COLORS.LB_GRAY_60};
  font-size: 1.4rem;
  font-weight: 400;
`;

export const Check = styled.img`
  margin-left: auto;
`;
