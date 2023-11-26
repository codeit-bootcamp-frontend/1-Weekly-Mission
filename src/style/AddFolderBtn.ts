import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Button = styled.button`
  color: var(--linkbrary-primary);
  font-weight: 500;
  letter-spacing: -0.01875rem;
  white-space: nowrap;
`;

export const Img = styled.img`
  width: 1rem;
  height: 1rem;
`;
