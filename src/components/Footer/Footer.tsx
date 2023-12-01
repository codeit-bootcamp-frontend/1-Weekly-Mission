import * as S from './Footer.style';
import {
  IconFacebook,
  IconInstagram,
  IconTwitter,
  IconYoutube,
} from '@/public/svgs';

function Footer({
  footerRef,
}: {
  footerRef?: React.RefObject<HTMLDivElement>;
}) {
  return (
    <S.FooterContainer ref={footerRef}>
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
            <IconFacebook />
          </a>
          <a
            href='http://twitter.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            <IconTwitter />
          </a>
          <a
            href='http://youtube.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            <IconYoutube />
          </a>
          <a
            href='http://instagram.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            <IconInstagram />
          </a>
        </S.SNS>
      </S.FooterInner>
    </S.FooterContainer>
  );
}

export default Footer;
