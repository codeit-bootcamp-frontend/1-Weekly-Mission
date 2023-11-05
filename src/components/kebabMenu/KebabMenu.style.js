import styled from "styled-components";
import { RESPONSIBLE_MEDIA_QUERIES } from "../../constants/mediaQueries";

export const KebabButtonList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  position: absolute;
  align-items: flex-start;
  background: var(--gray-light-gray-00, #fff);
  box-shadow: 0rem 0.2rem 0.8rem 0rem rgba(51, 50, 54, 0.1);
  top: 3rem;
  right: -4.7rem;
  font-size: 1.4rem;
  cursor: pointer;
  z-index: 1;
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  transform: ${({ $isOpen }) => ($isOpen ? "scale(1)" : "scale(0.8)")};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  transition: opacity 0.3s ease, transform 0.3s ease;
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    right: 2rem;
  }
`;

export const KebabMenuButton = styled.button`
  display: flex;
  padding: 0.7rem 1.2rem;
  justify-content: center;
  align-items: center;
  width: 10rem;
  gap: 1rem;
  cursor: pointer;
  &:hover {
    background: var(--linkbrary-gray-10, #e7effb);
    color: var(--linkbrary-primary-color, #6d6afe);
  }
`;
