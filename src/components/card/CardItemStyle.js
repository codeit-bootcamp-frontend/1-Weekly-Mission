import styled from "styled-components";
import { breakPoints } from "styles/media";

export const Wrapper = styled.div`
  width: 340px;
  height: 334px;
  color: inherit;
  text-decoration: none;
  outline: none;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 300ms linear;

  &:hover {
    background-color: var(--color-primary-varient);
  }

  @media only screen and (${breakPoints.mobile}) {
    width: 100%;
    height: 100%;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 21.25rem;
  height: 12.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dddfff;
  overflow: hidden;

  @media only screen and (${breakPoints.mobile}) {
    width: 100%;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

export const CardImage = styled.img`
  width: ${({ $isImageurl }) => ($isImageurl ? "100%" : "133px")};
  height: ${({ $isImageurl }) => ($isImageurl ? "100%" : "24px")};
  object-fit: cover;
  opacity: ${({ $isImageurl }) => ($isImageurl ? "" : "0.2")};
  transition: all 300ms linear;

  &:hover {
    transform: scale(1.3);
  }
`;

export const CardInfo = styled.div`
  padding: 1rem 1.25rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Info = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0;
  font-size: 0.8rem;
  color: #666666;
`;

export const Description = styled.p`
  margin: 0;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.5rem;
`;

export const CreatedAt = styled.p`
  margin: 0;
  font-size: 0.85rem;
`;
