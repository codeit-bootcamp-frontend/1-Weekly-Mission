import styled from 'styled-components';

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;

  height: 20rem;

  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
`;

export const Image = styled.img`
  width: 100%;

  object-fit: cover;
  transition-duration: 0.2s;
`;

export const StarButton = styled.img`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  width: 3.4rem;
  height: 3.4rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  padding: 1.5rem 2rem;

  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  gap: 1rem;
`;

export const KebabButton = styled.img`
  position: absolute;
  top: 1.5rem;
  right: 2rem;

  width: 2.1rem;
  height: 1.7rem;
`;

export const TimeDiff = styled.p`
  color: #666666;
  font-size: 1.3rem;
`;

export const Description = styled.p`
  overflow: hidden;

  height: 4.9rem;

  font-size: 1.6rem;
  line-height: 150%;
`;

export const Date = styled.p`
  font-size: 1.4rem;
`;
