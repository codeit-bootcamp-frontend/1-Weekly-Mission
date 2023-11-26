import styled from "styled-components";

export const LinkDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 50rem;
  height: 4.3125rem;
  margin: 1.5rem 20rem;
  padding: 1rem 1.25rem;
  gap: 0.75rem;
  border-radius: 0.9375rem;
  border: 1px solid var(--linkbrary-primary);
  background-color: #fff;
  font-size: 1rem;
  line-height: 1.5rem;

  @media (max-width: 1123px) {
    maßx-width: 44rem;
  }

  @media (max-width: 767px) {
    gap: 0.5rem;
    width: 100%;
    max-width: 20.3125rem;
    height: 3.3125rem;
    padding: 0.5rem 0.63rem;
    margin: 2.5rem 0rem;
    border-radius: 0.9375rem;
    font-size: 0.875rem;
  }
`;

export const LinkInput = styled.input`
  flex-grow: 1;
  border: none;
  background: transparent;
`;

export const LinkImg = styled.img`
  width: 1.25rem;
  height: 1.25rem;

  @media (max-width: 767px) {
    width: 1rem;
    height: 1rem;
  }
`;
