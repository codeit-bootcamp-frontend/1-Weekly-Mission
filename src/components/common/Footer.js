import FacebookIcon from "../../assets/common/img_facebookIcon.png";
import InstagramIcon from "../../assets/common/img_instagramIcon.png";
import YoutubeIcon from "../../assets/common/img_youtubeIcon.png";
import TwitterIcon from "../../assets/common/img_twitterIcon.png";
import styled from "styled-components";
import { device } from "../styles";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="contentContainer">
        <div id="leftItem" className="footerItem">
          ©codeit - 2023
        </div>

        <LinkItemContainer>
          <a className="centerItem footerItem" href="./html/privacy.html">
            Privacy Policy
          </a>
          <a className="centerItem footerItem" href="./html/faq.html">
            FAQ
          </a>
        </LinkItemContainer>

        <SnsItemContainer>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src={FacebookIcon} alt="facebookIcon" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img src={TwitterIcon} alt="twitterIcon" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <img src={YoutubeIcon} alt="youtubeIcon" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={InstagramIcon} alt="instagramIcon" />
          </a>
        </SnsItemContainer>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background: var(--black);
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  @media all and ${device.mobile} {
    padding: 3.2rem;
  }

  .contentContainer {
    height: 6.4rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 171.2rem;
    padding: 3.2rem 10.4rem 6.4rem;
    @media all and ${device.mobile} {
      height: 9.6rem;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    #leftItem {
      color: #676767;
      text-align: center;
      @media all and ${device.mobile} {
        text-align: start;
        order: 3;
        align-self: flex-end;
      }
    }
  }

  .footerItem {
    font-family: Arial;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6rem;
  }
`;

const LinkItemContainer = styled.div`
  display: flex;
  gap: 3rem;

  .centerItem {
    cursor: pointer;
    color: #cfcfcf;
  }
`;

const SnsItemContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  @media all and ${device.mobile} {
    justify-content: flex-end;
  }

  a {
    height: 2rem;
  }

  img {
    cursor: pointer;
    width: 2rem;
    height: 2rem;
  }
`;
