import styled from "styled-components";

export const CardContainer = styled.li`
  display: grid;
  height: 100%;
  overflow: hidden;
  border-radius: 1.5rem;
  box-shadow: 0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.08);

  &:hover > .card--description {
    background-color: #f0f6ff;
  }
`;

export const CardWrapper = styled.a`
  display: grid;
  height: 100%;
  grid-template-rows: 20rem auto;
`;

export const CardImageContainer = styled.div`
  height: 20rem;
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
  transform-origin: center;

  ${CardContainer}:hover & {
    transform: scale(1.3);
  }
`;

export const CardInfo = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
  padding: 1.5rem 2rem;
  background-color: var(--linkbrary--color--white);

  ${CardContainer}:hover & {
    background-color: #f0f6ff;
  }
`;

export const TimeAgo = styled.div`
  font-size: 1.3rem;
  font-weight: 400;
  line-height: normal;
  color: #666666;
`;

export const Description = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--linkbrary--color--black);
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const CreatedDate = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
  color: #333333;
`;
