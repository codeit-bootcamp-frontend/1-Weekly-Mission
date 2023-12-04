import Link from 'next/link';
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
          <S.PageLink href='/pages/privacy.html'>Privacy Policy</S.PageLink>
          <S.PageLink href='/pages/faq.html'>FAQ</S.PageLink>
        </S.ExtraPage>
        <S.SNS>
          <Link
            href='http://facebook.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            <IconFacebook />
          </Link>
          <Link
            href='http://twitter.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            <IconTwitter />
          </Link>
          <Link
            href='http://youtube.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            <IconYoutube />
          </Link>
          <Link
            href='http://instagram.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            <IconInstagram />
          </Link>
        </S.SNS>
      </S.FooterInner>
    </S.FooterContainer>
  );
}

export default Footer;
