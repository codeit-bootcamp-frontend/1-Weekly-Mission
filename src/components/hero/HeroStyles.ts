import styled from "styled-components";
import { breakPoints } from "@/common/media";
import LinkIcon from "public/assets/link.svg";

export const HeroContainer = styled.div`
  margin-top: 4.2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Profile = styled.div`
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
  font-size: 2.5rem;
  font-weight: var(--font-semibold);
  margin: 0 auto;

  @media only screen and (${breakPoints.mobile}) {
    padding-bottom: 2.5rem;
    font-size: 2rem;
  }
`;

export const LinkContainer = styled.section`
  text-align: center;
  background-color: var(--color-primary-varient);
`;

export const FixedLinkContainer = styled(LinkContainer)`
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 1;
`;

export const LinkForm = styled.div`
  padding: 1.5rem 2rem;
  position: relative;
  max-width: 55rem;
  width: 100%;
  margin: auto;
`;

export const Icon = styled(LinkIcon)`
  position: absolute;
  top: 50%;
  left: 3.5rem;
  transform: translate(-50%, -50%);
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
`;
