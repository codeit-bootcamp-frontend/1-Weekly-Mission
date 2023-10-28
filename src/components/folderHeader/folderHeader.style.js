import styled from "styled-components";

export const FolderHeader = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.9rem;
`;

export const FolderTitle = styled.p`
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
