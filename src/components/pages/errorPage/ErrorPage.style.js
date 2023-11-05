import styled from "styled-components";

export const ErrorPage = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60rem;
  font-size: 1.8rem;
  flex-direction: column;
  gap: 3rem;
  & a {
    color: var(--linkbrary-primary-color);
    text-decoration: none;
  }
`;
