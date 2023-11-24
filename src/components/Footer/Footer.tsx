import facebook from "src/assets/facebook.svg";
import twitter from "src/assets/twitter.svg";
import youtube from "src/assets/youtube.svg";
import instagram from "src/assets/instagram.svg";
import { Copy, Container, Info, Sns } from "src/components/Footer/Footer.styled";

function Footer() {
  return (
    <Container>
      <Copy>©codeit - 2023</Copy>
      <Info>
        <a href="/privacy">Privacy Policy</a>
        <a href="/faq">FAQ</a>
      </Info>
      <Sns>
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com">
          <img src={facebook} alt="페이스북 페이지로 연결" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://twitter.com">
          <img src={twitter} alt="트위터 페이지로 연결" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com">
          <img src={youtube} alt="유튜브 페이지로 연결" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com">
          <img src={instagram} alt="인스타그램 페이지로 연결" />
        </a>
      </Sns>
    </Container>
  );
}

export default Footer;
