import styled from "styled-components";
import {
  RESPONSIBLE_SIZE_TABLET,
  RESPONSIBLE_SIZE_MOBILE,
} from "utils/constants";

export const FolderInfoContainer = styled.main`
  padding: 2rem 0 6rem;
  overflow: hidden;
  background-color: var(--linkbrary--color--gray5);
  text-align: center;

  @media screen and (${RESPONSIBLE_SIZE_TABLET}) {
    padding: 1rem 0 4rem;
  }
`;

export const ProfileImage = styled.img`
  border-radius: 4.7rem;
  margin-bottom: 1.2rem;

  @media screen and (${RESPONSIBLE_SIZE_MOBILE}) {
    width: 4rem;
    height: 4rem;
    margin-bottom: 0.6rem;
  }
`;

export const ProfileName = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 2rem;

  @media screen and (${RESPONSIBLE_SIZE_MOBILE}) {
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }
`;

export const FolderName = styled.p`
  font-size: 4rem;
  font-weight: 600;
  line-height: normal;

  @media screen and (${RESPONSIBLE_SIZE_MOBILE}) {
    font-size: 3.2rem;
    letter-spacing: -0.2px;
  }
`;

export const FolderContentsContainer = styled.section`
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

export const LinkCardListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 33.5rem;
  gap: 2rem 2.5rem;
  width: 100%;

  @media screen and (${RESPONSIBLE_SIZE_TABLET}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.4rem 2.5rem;
  }

  @media screen and (${RESPONSIBLE_SIZE_MOBILE}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;
