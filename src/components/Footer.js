import facebookIcon from "../assets/Footer-facebook-icon.svg";
import twitterIcon from "../assets/Footer-twitter-icon.svg";
import youtubeIcon from "../assets/Footer-youtube-icon.svg";
import instagramIcon from "../assets/Footer-instagram-icon.svg";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  margin-top: 12rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 16rem;
  width: 100%;
  padding: 3.2rem 10.4rem 6.4rem 10.4rem;
  flex-shrink: 0;
  background: var(--black);
  position: relative;
  font-family: Arial;
  font-size: 1.6rem;
  font-weight: 400;
  z-index: 2;

  @media (max-width: 767px) {
    margin-top: 8rem;
    padding: 3.2rem;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex: 0 1 192rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  @media (max-width: 767px) {
    align-items: flex-start;
  }
`;

export const CodeitInfo = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;
  color: #676767;
  text-align: center;

  @media (max-width: 767px) {
    position: absolute;
    bottom: 3.2rem;
    left: 3.2rem;
  }
`;

export const Info = styled.div`
  display: flex;
  width: 18.1111rem;
  align-items: flex-start;
  gap: 3rem;

  a {
    color: #cfcfcf;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const WebsiteLinks = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <CodeitInfo>©codeit - 2023</CodeitInfo>
        <Info>
          <a href="./privacy">Privacy Policy</a>
          <a href="./faq">FAQ</a>
        </Info>
        <WebsiteLinks>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener">
            <img src={facebookIcon} alt="페이스북 아이콘: 누르면 해당 홈페이지로 이동" />
          </a>
          <a target="_blank" href="https://twitter.com/" rel="noreferrer noopener">
            <img src={twitterIcon} alt="트위터 아이콘: 누르면 해당 홈페이지로 이동" />
          </a>
          <a target="_blank" href="https://www.youtube.com/" rel="noreferrer noopener">
            <img src={youtubeIcon} alt="유튜브 아이콘: 누르면 해당 홈페이지로 이동" />
          </a>
          <a target="_blank" href="https://www.instagram.com/" rel="noreferrer noopener">
            <img src={instagramIcon} alt="인스타그램 아이콘: 누르면 해당 홈페이지로 이동" />
          </a>
        </WebsiteLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
