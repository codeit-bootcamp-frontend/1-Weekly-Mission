import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { onMobile } from 'styles/mediaQuery';
import { COLORS } from 'styles/color';

const selectedFolder = css`
  background: ${COLORS.PRIMARY};
  color: ${COLORS.WHITE};
`;

const unselectedFolder = css`
  background: ${COLORS.WHITE};
  color: ${COLORS.BLACK};
`;

export const FolderListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding-inline-start: 0;

  list-style-type: none;
`;

export const FolderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 0.8rem;
`;

export const Folder = styled(NavLink)<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0.8rem 1.2rem;

  border: 0.1rem solid ${COLORS.PRIMARY};

  border-radius: 0.5rem;

  font-size: 1.6rem;
  line-height: 100%;
  ${({ selected }) => (selected ? selectedFolder : unselectedFolder)};
`;

export const AddFolderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${COLORS.PRIMARY};
  font-weight: 500;
  font-size: 1.6rem;
  text-align: center;

  gap: 0.4rem;

  .onMobile {
    display: none;
  }

  ${onMobile} {
    position: fixed;
    bottom: 11.8rem;
    left: 50%;
    z-index: 9999;

    padding: 0.8rem 2.4rem;
    border: 0.1rem solid ${COLORS.WHITE};
    border-radius: 2rem;

    background: ${COLORS.PRIMARY};

    color: ${COLORS.WHITE};

    transform: translate(-50%);

    .notMobile {
      display: none;
    }

    .onMobile {
      display: block;
    }
  }
`;
