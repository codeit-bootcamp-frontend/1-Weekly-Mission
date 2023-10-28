import styled from "styled-components";
import {
  RESPONSIBLE_SIZE_TABLET,
  RESPONSIBLE_SIZE_MOBILE,
} from "utils/constants";

export const FolderAddWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 6rem 9rem;
  background-color: var(--linkbrary--color--gray5);
  text-align: center;
`;

export const LinkFolderListContainer = styled.section`
  padding: 4rem 19rem 10rem;
  display: grid;
  gap: 4rem;

  @media screen and (${RESPONSIBLE_SIZE_TABLET}) {
    padding: 4rem 3.25rem 10rem;
    display: grid;
    gap: 4rem;
  }

  @media screen and (${RESPONSIBLE_SIZE_MOBILE}) {
    padding: 2rem 3.25rem 4rem;
    gap: 3.2rem;
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
  font-size: 1.6rem;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
  color: #6d6afe;
`;
