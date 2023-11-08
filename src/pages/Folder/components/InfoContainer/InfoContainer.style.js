import styled from 'styled-components';
import { onTablet, onPc } from 'styles/mediaQuery';
import { COLORS } from 'styles/palette';

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2.8rem;
  width: 100%;

  ${onTablet} {
    flex-direction: row;
    justify-content: space-between;
  }

  ${onPc} {
    flex-direction: row;
    justify-content: space-between;
  }
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
