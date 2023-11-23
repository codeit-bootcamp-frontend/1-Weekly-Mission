import { Link } from "react-router-dom";
import styled from "styled-components";
import facebookIcon from "../../../Assets/facebookIcon.svg";
import twitterIcon from "../../../Assets/twitterIcon.svg";
import youtubeIcon from "../../../Assets/youtubeIcon.svg";
import instagramIcon from "../../../Assets/instagramIcon.svg";

interface UrlListItem {
  url: string;
  icon: any;
}

interface UrlList {
  [key: string]: UrlListItem;
}

const urlList: UrlList = {
  facebook: { url: "https://www.facebook.com/", icon: facebookIcon },
  twitter: { url: "https://twitter.com/?lang=ko", icon: twitterIcon },
  youtube: { url: "https://www.youtube.com/", icon: youtubeIcon },
  instagram: { url: "https://www.instagram.com/", icon: instagramIcon },
};

function Icon({ name, onClick, className }: any) {
  const { url, icon } = urlList[name];

  const handleClick = () => onClick(url);

  return (
    <img
      src={icon}
      className={className}
      alt={name}
      onClick={handleClick}
    ></img>
  );
}

const StyledIcon = styled(Icon)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

function Footer() {
  const handleIconClick = (url: any) => {
    window.open(url);
  };

  return (
    <Wrapper>
      <Container>
        <Copyright>©codeit - 2023</Copyright>
        <DirectLinks>
          <StyledLink to="/">Privacy Policy</StyledLink>
          <StyledLink to="/">FAQ</StyledLink>
        </DirectLinks>
        <IconWrapper>
          {["facebook", "twitter", "youtube", "instagram"].map((sns, idx) => {
            return (
              <StyledIcon
                name={sns}
                key={idx.toString()}
                onClick={handleIconClick}
              />
            );
          })}
        </IconWrapper>
      </Container>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  margin-top: 100px;
  background-color: #111322;
  min-width: 375px;
`;

const Container = styled.div`
  height: 160px;
  display: grid;
  padding: 32px 104px 64px;
  margin: 0 auto;
  justify-content: space-between;
  font-size: 1.6rem;
  grid-template-areas: "copyright directLink icons";
  gap: 60px;

  @media (max-width: 767px) {
    grid-template-areas:
      "directLink icons"
      "copyright .";
    padding: 32px 32px 64px;
  }
`;

const Copyright = styled.div`
  flex-shrink: 0;
  color: #676767;
  grid-area: copyright;
`;

const DirectLinks = styled.div`
  flex-shrink: 0;
  display: flex;
  gap: 30px;
  grid-area: directLink;
`;

const StyledLink = styled(Link)`
  flex-shrink: 0;
  color: #cfcfcf;
  text-decoration: none;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 12px;
  grid-area: icons;
`;
