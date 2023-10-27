import styled, { css } from 'styled-components';
import { onTablet, onPc } from 'styles/mediaQuery';
import { COLORS } from 'styles/palette';
import { zIndexStyle } from 'styles/zIndexStyle';

export const FolderListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 3.2rem;
  padding-bottom: 2.8rem;
`;

export const FolderList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.8rem;
  row-gap: 1.2rem;
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

export const AddFolderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  position: fixed;
  bottom: 10.1rem;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: ${zIndexStyle.floating};
  padding: 0.8rem 2.4rem;
  border-radius: 2rem;
  background-color: ${COLORS['LB_PRIMARY']};
  opacity: 0.85;
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: -0.03rem;
  color: #fff;

  ${onTablet} {
    position: static;
    transform: translate(0, 0);
    opacity: 1;
    background-color: #fff;
    color: ${COLORS['LB_PRIMARY']};
  }

  ${onPc} {
    position: static;
    transform: translate(0, 0);
    opacity: 1;
    background-color: #fff;
    color: ${COLORS['LB_PRIMARY']};
  }
`;

export const AddColor = styled.img`
  display: none;

  ${onTablet} {
    display: block;
  }

  ${onPc} {
    display: block;
  }
`;
export const AddWhite = styled.img`
  ${onTablet} {
    display: none;
  }

  ${onPc} {
    display: none;
  }
`;

export const FolderInfo = styled.div`
  display: flex;
  flex-direction: column;
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
