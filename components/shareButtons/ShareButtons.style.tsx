import styled from "styled-components";

export const ShareButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3.2rem;
`;

export const ShareButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

export const ShareIcon = styled.img`
  border-radius: 3.7333rem;
`;

export const shareText = styled.p`
  color: var(--linkbrary-gray-100);
  text-align: center;
  font-family: Inter;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.5rem;
`;
