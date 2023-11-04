import styled from "styled-components";

export const Div = styled.div`
  display: none;
  align-items: center;
  gap: 0.25rem;
  z-index: 100;
  position: fixed;
  bottom: 101px;
  padding: 0.5rem 1.5rem;
  border-radius: 1.25rem;
  border: 1px solid #fff;
  background-color: var(--linkbrary-primary);

  @media (max-width: 767px) {
    display: flex;
  }
`;

export const Button = styled.button`
  color: var(--linkbrary-primary);
  font-weight: 500;
  letter-spacing: -0.01875rem;
  white-space: nowrap;
  color: var(--linkbrary-gray-10);
`;

export const Img = styled.img`
  width: 1rem;
  height: 1rem;
  color: var(--linkbrary-gray-10);
`;
