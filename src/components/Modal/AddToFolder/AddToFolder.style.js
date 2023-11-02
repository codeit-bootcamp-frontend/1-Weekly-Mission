import styled from 'styled-components';
import { COLORS } from 'styles/palette';

export const FoldersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Folder = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem;
`;

export const FolderTitle = styled.span`
  color: ${COLORS['LB_GRAY_100']};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

export const FolderDescription = styled.span`
  color: ${COLORS['LB_GRAY_60']};
  font-size: 1.4rem;
  font-weight: 400;
`;
