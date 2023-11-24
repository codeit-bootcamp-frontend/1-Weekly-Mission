import facebook from './img/facebook.svg';
import twitter from './img/twitter.svg';
import youtube from './img/youtube.svg';
import insta from './img/insta.svg';
import * as F from './styled-component/FooterStyledComponent';

export default function Footer() {
  return (
    <F.FooterContainer>
      <F.FoterLeft>©codeit - 2023</F.FoterLeft>
      <F.FooterMidle>
        <F.PolicyNFaqA href="./policy.html">Privacy Policy</F.PolicyNFaqA>
        <F.PolicyNFaqA href="./faq.html">FAQ</F.PolicyNFaqA>
      </F.FooterMidle>
      <F.FooterRight className="footer-right">
        <a href="https://www.facebook.com">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://www.twitter.com">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="https://www.youtube.com">
          <img src={youtube} alt="youtube" />
        </a>
        <a href="https://www.instagram.com">
          <img src={insta} alt="instagram" />
        </a>
      </F.FooterRight>
    </F.FooterContainer>
  );
}
