import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { onMobile } from 'styles/mediaQuery';

const selectedFolder = css`
  background: var(--primary);
  color: var(--white);
`;

const unselectedFolder = css`
  background: var(--white);
  color: var(--black);
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

  border: 0.1rem solid var(--primary);

  border-radius: 0.5rem;

  font-size: 1.6rem;
  line-height: 100%;
  ${({ selected }) => (selected ? selectedFolder : unselectedFolder)};
`;

export const AddFolderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--primary);
  font-weight: 500;
  font-size: 1.6rem;
  text-align: center;

  gap: 0.4rem;

  .onMobile {
    display: none;
  }

  ${onMobile} {
    position: fixed;
    bottom: 10.1rem;
    left: 50%;
    z-index: 9999;

    padding: 0.8rem 2.4rem;
    border: 0.1rem solid var(--white);
    border-radius: 2rem;

    background: var(--primary);

    color: var(--white);

    transform: translate(-50%);

    .notMobile {
      display: none;
    }

    .onMobile {
      display: block;
    }
  }
`;
