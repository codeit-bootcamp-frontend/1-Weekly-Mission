import styled from "styled-components";

export const FloatingCta = styled.a`
  z-index: 100;
  position: fixed;
  bottom: 101px;
  padding: 0.5rem 1.5rem;
  border-radius: 1.25rem;
  border: 1px solid #fff;
  background-color: var(--linkbrary-primary);
  color: var(--linkbrary-gray-10);
  font-weight: 500;
  letter-spacing: -0.01875rem;
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  flex-wrap: nowrap;
`;

export const FlexUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const OptionalUl = styled.ul`
  display: flex;
  gap: 0.75rem;
`;

export const AddBtn = styled.button`
  width: auto;
  color: var(--linkbrary-primary);
  font-weight: 500;
  letter-spacing: -0.01875rem;
  white-space: nowrap;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const FolderBtn = styled.button`
  max-height: 2.07rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.3125rem;
  border: 1px solid var(--linkbrary-primary);
  background-color: ${({ active }) =>
    active ? `var(--linkbrary-primary)` : `#fff`};
  color: ${({ active }) => active && `#fff`};
  white-space: nowrap;
  line-height: 100%;
`;

export const H1 = styled.h1`
  font-size: 1.5rem;
  fot-weight: 600;
  letter-spacing: -0.0125rem;
  white-space: nowrap;
  margin: 1.5rem 0;
`;
