import styled from "styled-components";
import { RESPONSIBLE_MEDIA_QUERIES } from "../../constants/mediaQueries";

export const FolderInfoWrap = styled.div`
  background-color: var(--linkbrary-zircon);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 3.2rem 6rem 3.2rem;
  gap: 2rem;
  ${RESPONSIBLE_MEDIA_QUERIES.tablet} {
    gap: 2.4rem;
  }
`;
export const FolderOwnerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  gap: 1.2rem;
  color: #000;
  font-size: 1.6rem;
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    font-size: 1.4rem;
  }
`;

export const FolderTitle = styled.h1`
  color: #000;
  font-size: 4rem;
  font-weight: 600;

  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    font-size: 3.2rem;
  }
`;

export const UserAvatarImg = styled.img`
  width: 6rem;
`;
