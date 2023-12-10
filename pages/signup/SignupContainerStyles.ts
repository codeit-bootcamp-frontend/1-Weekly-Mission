import Link from "next/link";
import styled from "styled-components";
import { breakPoints } from "@/common/media";

export const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-primary-bg);
`;

export const Container = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  white-space: nowrap;

  @media only screen and (${breakPoints.mobile}) {
    width: 100%;
    max-width: 29rem;
    min-width: 389px;
  }
`;

export const StyledLinkLogo = styled(Link)`
  margin: 0;
  position: relative;
  width: 13rem;
  height: 2.375rem;
`;

export const Description = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const StyledLink = styled(Link)`
  color: var(--color-primary);
  font-weight: var(--font-semibold);
`;

export const UnderLine = styled.div`
  border: 1px solid var(--color-primary);
`;

export const OAuth = styled.div`
  width: 25rem;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid var(---color-gray-20);
  background: var(--color-gray-10);

  @media only screen and (${breakPoints.mobile}) {
    width: 100%;
    min-width: 325px;
  }
`;

export const OAuthTitle = styled.span`
  font-size: 0.875rem;
  color: var(--color-gray);
`;

export const OAuthLinks = styled.div`
  display: flex;
  gap: 1rem;
`;
