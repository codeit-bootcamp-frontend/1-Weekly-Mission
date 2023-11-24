import * as S from "./Footer.style";
import facebook from "assets/images/facebook.svg"
import instagram from "assets/images/instagram.svg"
import twitter from "assets/images/twitter.svg"
import youtube from "assets/images/youtube.svg"

function Footer() {
  return(
    <S.FooterSection>
      <S.FooterContainer>
        <S.FooterWrapper>
          <S.Copyright>©codeit - 2023</S.Copyright>
          <S.Info>
            <div>Privacy Policy</div>
            <div>FAQ</div>
          </S.Info>
          <S.SNS>
            <li><S.SNSIcon src={facebook} alt="페이스북으로 이동" /></li>
            <li><S.SNSIcon src={twitter} alt="페이스북으로 이동" /></li>
            <li><S.SNSIcon src={youtube} alt="페이스북으로 이동" /></li>
            <li><S.SNSIcon src={instagram} alt="페이스북으로 이동" /></li>
          </S.SNS>
        </S.FooterWrapper>
      </S.FooterContainer>
    </S.FooterSection>
  );
}

export default Footer;