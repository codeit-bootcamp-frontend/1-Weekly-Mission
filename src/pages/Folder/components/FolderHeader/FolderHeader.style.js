import styled, { css } from 'styled-components';
import { COLORS } from 'styles/palette';

export const FolderListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.8rem;
  row-gap: 1.2rem;
  padding-top: 3.2rem;
  padding-bottom: 2.8rem;
`;

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

export const FolderInfo = styled.div`
  width: 100%;
`;

export const FolderTitle = styled.h1`
  margin-bottom: 1.2rem;
  font-size: 2rem;
  font-weight: 600;
`;

export const SettingButtonContainer = styled.div`
  display: flex;
  gap: 1.4rem;
`;

export const SettingButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  color: ${COLORS['LB_GRAY_60']};
  font-size: 1.4rem;
  font-weight: 600;
`;
