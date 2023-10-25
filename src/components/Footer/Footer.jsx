import * as S from './Footer.style';
import facebookIcon from 'assets/icons/facebook.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import youtubeIcon from 'assets/icons/youtube.svg';
import instagramIcon from 'assets/icons/instagram.svg';

function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterInner>
        <S.Copyright>©codeit - 2023</S.Copyright>
        <S.ExtraPage>
          <S.Link href='/pages/privacy.html'>Privacy Policy</S.Link>
          <S.Link href='/pages/faq.html'>FAQ</S.Link>
        </S.ExtraPage>
        <S.SNS>
          <a
            href='http://facebook.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            <img src={facebookIcon} alt='페이스북 로고' />
          </a>
          <a
            href='http://twitter.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            <img src={twitterIcon} alt='트위터 로고' />
          </a>
          <a
            href='http://youtube.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            <img src={youtubeIcon} alt='유튜브 로고' />
          </a>
          <a
            href='http://instagram.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            <img src={instagramIcon} alt='인스타그램 로고' />
          </a>
        </S.SNS>
      </S.FooterInner>
    </S.FooterContainer>
  );
}

export default Footer;
