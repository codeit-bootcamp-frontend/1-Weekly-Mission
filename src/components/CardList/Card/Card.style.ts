import styled from "styled-components";

export const ImageContainer = styled.div`
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  display: flex;
  overflow: hidden;
  justify-content: center;
  height: 20rem;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  transition-duration: 0.2s;
  object-fit: cover;
`;

export const StarButton = styled.img`
  width: 3.4rem;
  height: 3.4rem;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;

export const Info = styled.div`
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  display: flex;
  padding: 1.5rem 2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  position: relative;
`;

export const KebabButton = styled.button`
  width: 2.1rem;
  height: 1.7rem;
  position: absolute;
  top: 1.5rem;
  right: 2rem;
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

export const PopoverContainer = styled.div`
  display: flex;
  width: 10rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  background: var(--gray-light-gray-00, #fff);
  box-shadow: 0 0.2rem 0.8rem 0 rgba(51, 50, 54, 0.1);
`;

export const PopoverButton = styled.button`
  display: flex;
  padding: 0.7rem 1.2rem;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
  font-size: 1.4rem;

  &:hover {
    color: var(--primary);
    background: var(--gray10);
  }
`;
