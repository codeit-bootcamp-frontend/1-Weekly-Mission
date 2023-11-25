import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 32.5rem;
  height: 32.7rem;
  flex-shrink: 0;
  border-radius: 15px;
  position: relative;
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.08);
  overflow: hidden;

  @media (min-width: 768px) {
    width: 34rem;
    height: 33rem;
  }
`;

export const CardInfoBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 1.5rem 2rem;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  gap: 1rem;
  z-index: 1;
  position: relative;
`;

export const CardInfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const CardPassedTime = styled.p`
  color: #666;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CardInfoDescription = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;
  height: 4.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
