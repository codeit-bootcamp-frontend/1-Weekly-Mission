import styled from "styled-components";
import { RESPONSIBLE_SIZE } from "utils/constants";

export const FolderHeader = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2.4rem 0;

  @media screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
    margin: 2.8rem 0 2rem;
  }
`;

export const FolderTitle = styled.p`
  height: 2.9rem;
  font-size: 2.4rem;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
  color: #000;
`;

export const ButtonList = styled.ul`
  display: flex;
  gap: 1.2rem;
`;

export const ButtonItem = styled.button`
  display: flex;
  gap: 0.4rem;
  cursor: pointer;
`;

export const ButtonImage = styled.img`
  width: 18px;
  height: 18px;
`;

export const ButtonTitle = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: normal;
  color: var(--linkbrary--color--gray2);
`;
