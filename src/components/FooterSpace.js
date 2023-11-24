import "../styles/reset.css";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import youtube from "../images/youtube.svg";
import styled from "styled-components";
function FooterSpace() {
  return (
    <Footer>
      <FooterBox>
        <Copyright>©codeit - 2023</Copyright>
        <FooterLinks>
          <a href="/">Privacy Policy</a>
          <a href="/">FAQ</a>
        </FooterLinks>
        <Sns>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img
              src={facebook}
              alt="facebook 홈페이지로 연결된 facebook 로고"
            />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img src={twitter} alt="twitter 홈페이지로 연결된 twitter 로고" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <img src={youtube} alt="youtube 홈페이지로 연결된 youtube 로고" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img
              src={instagram}
              alt="instagram 홈페이지로 연결된 instagram 로고"
            />
          </a>
        </Sns>
      </FooterBox>
    </Footer>
  );
}

export default FooterSpace;

const Footer = styled.div`
  display: flex;
  height: 160px;
  padding: 32px 104px 64px 104px;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  background: #111322;
  margin: 40px auto 0px;
`;

const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 1123px) {
    width: 900px;
  }

  @media (max-width: 768px) {
    width: 500px;
  }
`;

const Copyright = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  color: #676767;
`;

const FooterLinks = styled.div`
  display: flex;
  width: 181.111px;
  align-items: flex-start;
  gap: 30px;
  color: #676767;
`;

const Sns = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;
