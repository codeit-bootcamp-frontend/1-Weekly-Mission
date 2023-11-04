import styled from "styled-components";

export const Link = styled.a`
  text-align: center;
  width: 8rem;
  padding: 1rem 1.25rem;
  border-radius: 0.5rem;
  background: var(--gra-purpleblue-to-skyblue);
  color: var(--gray-light);
  font-size: 1.125rem;
  font-weight: 600;
`;

export const LinkSmall = styled(Link)`
  width: 5rem;
  padding: 0.62rem 1rem;
  font-size: 0.875rem;
  white-space: nowrap;
`;
