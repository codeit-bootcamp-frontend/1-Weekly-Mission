import styled from "styled-components";
import { breakPoints } from "styles/media";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--color-primary-varient);
  z-index: 1;
`;

export const Container = styled.div`
  padding: 1.25rem 12.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1920px;
  margin: auto;

  @media only screen and (${breakPoints.tablet}) {
    max-width: 863px;
    padding: 1.25rem 2rem;
  }

  @media only screen and (${breakPoints.mobile}) {
    padding: 0.8rem 2rem;
  }
`;

export const Logo = styled.img`
  cursor: pointer;

  @media only screen and (${breakPoints.mobile}) {
    width: 5.5rem;
    height: 1rem;
  }
`;

export const Navbar = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

// export const LoginBtn = styled.button`
//   padding: 1rem 1.25rem;
//   width: 128px;
//   border: none;
//   border-radius: 0.5rem;
//   background: var(--gra-purpleblue-to-skyblue);
//   color: var(--color-white);
//   font-size: var(--font-small);
//   font-weight: var(--font-semibold);
//   cursor: pointer;

//   @media only screen and (${breakPoints.mobile}) {
//     width: 5rem;
//     padding: 0.625rem 1rem;
//     font-size: 0.875rem;
//   }
// `;

export const ProfileImage = styled.img`
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
`;

export const ProfileEmail = styled.span`
  @media only screen and (${breakPoints.mobile}) {
    display: none;
  }
`;
