import { social } from "constants/link";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      <StyledWrapper>
        <StyledLogo>©codeit - 2023</StyledLogo>
        <StyledLinkToPage>
          <StyledLink to="/">Privacy Policy</StyledLink>
          <StyledLink to="/">FAQ</StyledLink>
        </StyledLinkToPage>
        <StyledSocialIcon>
          {social.map((media) => (
            <Link to={media.link} key={media.icon}>
              <img src={media.icon} alt="socialIcon" />
            </Link>
          ))}
        </StyledSocialIcon>
      </StyledWrapper>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 16rem;
  padding-top: 3.2rem;
  background-color: #111322;
  min-height: 100%;
`;

const StyledWrapper = styled.div`
  bottom: 0;
  display: grid;
  grid-template: "logo linkToPage socialIcon";
  justify-content: space-between;
  width: 100%;
  max-width: 192rem;
  height: fit-content;
  padding: 0 10.4rem;

  @media (max-width: 767px) and (min-width: 375px) {
    grid-template:
      "linkToPage socialIcon"
      "logo .";
    padding: 0 2rem;
    gap: 5rem;
  }
`;

const StyledLogo = styled.span`
  grid-area: logo;
  font-size: 1.6rem;
  color: #676767;
`;

const StyledLinkToPage = styled.div`
  grid-area: linkToPage;
  display: flex;
  column-gap: 3rem;
  padding-right: 1.8rem;
`;

const StyledSocialIcon = styled.div`
  grid-area: socialIcon;
  display: flex;
  column-gap: 1.2rem;
  height: 2rem;
`;

const StyledLink = styled(Link)`
  font-size: 1.6rem;
  color: #cfcfcf;
`;
