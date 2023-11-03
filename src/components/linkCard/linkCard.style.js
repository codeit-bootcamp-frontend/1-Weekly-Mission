import styled from "styled-components";
import { RESPONSIBLE_SIZE } from "utils/constants";

export const CardContainer = styled.li`
  position: relative;
`;

export const BookMarkButton = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  z-index: 1;
  cursor: pointer;

  > img {
    @media screen and (max-width: ${RESPONSIBLE_SIZE.tablet}) {
      width: 3.2rem;
    }
  }
`;

export const CardWrapper = styled.a`
  display: grid;
  grid-template-rows: 20rem auto;
  height: 100%;
  border-radius: 1.5rem;
  box-shadow: 0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.08);
  overflow: hidden;
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

  ${CardWrapper}:hover & {
    transform: scale(1.3);
  }
`;

export const CardInfo = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
  height: 13.5rem;
  padding: 1.5rem 2rem;
  background-color: var(--linkbrary--color--white);

  ${CardWrapper}:hover & {
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

export const KebabBox = styled.div`
  position: absolute;
  right: 2rem;
  bottom: calc(12rem - 1.7rem);
`;

export const KebabButton = styled.button`
  z-index: 1;
  cursor: pointer;
`;

export const KebabOptionList = styled.ul`
  position: absolute;
  left: 0;
  top: 2.1rem;
  display: inline-flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 10rem;
  background-color: var(--linkbrary--color--white);
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);

  @media screen and (max-width: ${RESPONSIBLE_SIZE.tablet}) {
    left: unset;
    right: 0.2rem;
  }
`;

export const KebabOptionItem = styled.li`
  padding: 0.7rem 1.2rem;

  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  color: #333236;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: var(--linkbrary--color--gray4);
    color: var(--linkbrary--color--primary);
  }
`;
