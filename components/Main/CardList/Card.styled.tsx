import styled from "styled-components";

export const WrapperCardImg = styled.div`
  height: 20.5rem;
  margin: 0 auto;
  overflow: hidden;
  border-top-right-radius: 1.5rem;
  border-top-left-radius: 1.5rem;
`;

export const CardImg = styled.img`
  width: 34rem;
  height: 100%;
  border-radius: 1.5rem 1.5rem 0 0;
  object-fit: cover;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  height: 13.5rem;
  padding: 1.5rem 2rem;
  gap: 1rem;
`;

export const WrapperTime = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  color: var(--Gray5);
`;

export const H3 = styled.h3`
  font-size: 1.4rem;
`;

export const ButtonStar = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;
