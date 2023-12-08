import styled from "styled-components";

export const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const Description = styled.div`
  width: 100%;
  text-align: center;
`;

export const Info = styled.p`
  margin: 0;
  padding-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--color-gray);
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const SocialImage = styled.img`
  width: 42px;
  height: 42px;
  cursor: pointer;
`;

export const Name = styled.span`
  font-size: 0.8rem;
`;
