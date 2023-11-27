import { Link } from "react-router-dom";
import facebook from "../assets/img/icon-facebook-white.svg";
import twitter from "../assets/img/icon-twitter-white.svg";
import youtube from "../assets/img/icon-youtube-white.svg";
import instagram from "../assets/img/icon-instagram-white.svg";
import * as Styled from "../style/Footer";

function Footer() {
  return (
    <Styled.Container>
      <Styled.Footer id="footer">
        <Styled.Span>©codeit - 2023</Styled.Span>
        <Styled.LinkContainer>
          <Styled.Link href="/privacy">Privacy Policy</Styled.Link>
          <Styled.Link href="/faq">FAQ</Styled.Link>
        </Styled.LinkContainer>
        <Styled.Ul>
          <li>
            <Link to="https://www.facebook.com/">
              <img src={facebook} alt="facebook" />
            </Link>
          </li>
          <li>
            <Link to="https://twitter.com/">
              <img src={twitter} alt="twitter" />
            </Link>
          </li>
          <li>
            <Link to="https://www.youtube.com/">
              <img src={youtube} alt="youtube" />
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/">
              <img src={instagram} alt="instagram" />
            </Link>
          </li>
        </Styled.Ul>
      </Styled.Footer>
    </Styled.Container>
  );
}

export default Footer;
