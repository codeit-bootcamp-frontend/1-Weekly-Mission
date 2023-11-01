import styled from "styled-components";
import {
  RESPONSIBLE_SIZE_TABLET,
  RESPONSIBLE_SIZE_MOBILE,
} from "utils/constants";
import { ReactComponent as addIcon } from "assets/icons/add.svg";

export const FolderAddWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 6rem 9rem;
  background-color: var(--linkbrary--color--gray5);
  text-align: center;

  @media screen and (${RESPONSIBLE_SIZE_TABLET}) {
    padding: 6rem 3.25rem 9rem;
  }

  @media screen and (${RESPONSIBLE_SIZE_MOBILE}) {
    padding: 2.4rem 3rem 3.2rem;
  }
`;

export const LinkFolderListContainer = styled.section`
  padding: 4rem 19rem 10rem;

  @media screen and (${RESPONSIBLE_SIZE_TABLET}) {
    padding: 4rem 3.25rem 10rem;
  }

  @media screen and (${RESPONSIBLE_SIZE_MOBILE}) {
    padding: 2rem 3.25rem 4rem;
  }
`;

export const FolderTabListContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const FolderAddButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  height: 3.9rem;
  white-space: nowrap;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
  color: #6d6afe;
  cursor: pointer;

  @media screen and (${RESPONSIBLE_SIZE_MOBILE}) {
    z-index: 1;
    position: fixed;
    bottom: 10.1rem;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10.1rem;
    padding: 0.8rem 2.4rem;

    border-radius: 2rem;
    background-color: var(--linkbrary--color--primary);
    color: var(--linkbrary--color--white);
  }
`;

export const FolderAddIcon = styled(addIcon)`
  path {
    fill: var(--linkbrary--color--primary);
  }

  @media screen and (${RESPONSIBLE_SIZE_MOBILE}) {
    path {
      fill: var(--linkbrary--color--white);
    }
  }
`;
