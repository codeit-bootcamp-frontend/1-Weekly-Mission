import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  max-width: 21.25rem;
  max-height: 20.875rem;
  border-radius: 15px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);

  &:hover {
    background-color: var(--linkbrary-bg);
  }
`;
//위에 카드 호버시 이미지 처리하기

export const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px 15px 0 0;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.2s linear;
`;

export const InfoContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 1rem 1.25rem 1.25rem;
  justify-content: space-between;
  gap: 0.62rem;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const TimeSpan = styled.span`
  white-space: nowrap;
  overflow: hidden;
  font-size: 0.8125rem;
  color: #666;
`;

export const Description = styled.p`
  display: -webkit-box;
  height: 3.06rem;
  overflow: hidden;
  white-space: normal;
  word-wrap: break-word;
  line-height: 1.5rem;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const DateSpan = styled.span`
  display: inline-block;
  font-size: 0.875rem;
  color: #333;
`;
