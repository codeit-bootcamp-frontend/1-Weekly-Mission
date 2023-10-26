import styled from "styled-components";

export const ImageContainer = styled.div`
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  display: flex;
  overflow: hidden;
  justify-content: center;
  height: 20rem;

  img {
    width: 100%;
    transition-duration: 0.2s;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  display: flex;
  padding: 1.5rem 2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const TimeDiff = styled.p`
  font-size: 1.3rem;
  color: #666666;
`;

export const Description = styled.p`
  height: 4.9rem;
  font-size: 1.6rem;
  line-height: 150%;
  overflow: hidden;
`;

export const Date = styled.p`
  font-size: 1.4rem;
`;
