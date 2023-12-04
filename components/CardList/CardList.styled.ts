import styled from 'styled-components';

export const CardList = styled.ul`
  border: 1px solid #000;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;

export const Card = styled.li`
  border: 1px solid #000;
  width: 34rem;
  height: 33.4rem;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  border: 1px solid #000;
  width: 100%;
  height: 20rem;
  border-radius: 1.5rem 1.5rem 0 0;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  padding: 1.5rem 2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const TimeDiff = styled.div`
  color: #666;

  /* Linkbrary/caption */
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Description = styled.p`
  height: 4.9rem;
  align-self: stretch;
  overflow: hidden;
  color: #000;
  text-overflow: ellipsis;
  white-space: nowrap;

  /* Linkbrary/body1-regular */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

export const Date = styled.p`
  height: 1.9rem;
  align-self: stretch;
  overflow: hidden;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;

  /* Linkbrary/body2-regular */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;