import styled from "styled-components";

export const ErrorPage = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60rem;
  font-size: 1.8rem;
  flex-direction: column;
  gap: 30px;
  & a {
    color: var(--linkbrary-primary-color);
    text-decoration: none;
  }
`;
