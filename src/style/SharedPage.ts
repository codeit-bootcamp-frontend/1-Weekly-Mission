import styled from "styled-components";
import { Section } from "./CardContainer";

export const FolderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.25rem;
  padding-bottom: 3.75rem;
  width: 100%;
  background-color: var(--linkbrary-bg);
`;

export const ProfileBox = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 70%;
  overflow: hidden;
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const OwnerName = styled.p`
  line-height: 1.5rem;
  margin: 0.75rem 0 1.25rem;
`;

export const FolderName = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
`;

export { Section };
