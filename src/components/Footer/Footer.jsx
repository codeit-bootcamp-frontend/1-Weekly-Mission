import * as S from './Footer.style';
import FACEBOOK_ICON from 'assets/icons/facebook.svg';
import TWITTER_ICON from 'assets/icons/twitter.svg';
import YOUTUBE_ICON from 'assets/icons/youtube.svg';
import INSTAGRAM_ICON from 'assets/icons/instagram.svg';

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
            <img src={FACEBOOK_ICON} alt='페이스북 로고' />
          </a>
          <a
            href='http://twitter.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            <img src={TWITTER_ICON} alt='트위터 로고' />
          </a>
          <a
            href='http://youtube.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            <img src={YOUTUBE_ICON} alt='유튜브 로고' />
          </a>
          <a
            href='http://instagram.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            <img src={INSTAGRAM_ICON} alt='인스타그램 로고' />
          </a>
        </S.SNS>
      </S.FooterInner>
    </S.FooterContainer>
  );
}

export default Footer;
