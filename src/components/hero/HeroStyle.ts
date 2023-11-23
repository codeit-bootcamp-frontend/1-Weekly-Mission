import styled from "styled-components";
import { breakPoints } from "styles/media";

export const Profile = styled.div`
  padding-top: 5.5rem;
  margin: 0;
  text-align: center;

  @media only screen and (${breakPoints.mobile}) {
    padding-top: 4.5rem;
  }
`;

export const Image = styled.img`
  width: 3.75rem;
  height: 3.75rem;

  @media only screen and (${breakPoints.mobile}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const Name = styled.p`
  margin: 1rem 0;

  @media only screen and (${breakPoints.mobile}) {
    margin: 0;
    margin-bottom: 10px;
    font-size: 0.875rem;
  }
`;

export const Title = styled.h2`
  padding-bottom: 3.75rem;
  font-size: 2.5rem;
  font-weight: var(--font-semibold);
  margin: 0 auto;

  @media only screen and (${breakPoints.mobile}) {
    padding-bottom: 2.5rem;
    font-size: 2rem;
  }
`;
