import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  grid-area: logo;
  width: fit-content;
  place-self: end center;
`;

export const StyledImage = styled(Image)`
  width: 22rem;
  height: auto;
`;

export const Text = styled.p`
  margin-top: 1.6rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

export const StyledLink = styled(Link)`
  margin-left: 1rem;
  color: var(--Primary);
  font-weight: 700;

  &:hover {
    color: var(--Gray5);
    text-decoration: underline;
  }
`;
