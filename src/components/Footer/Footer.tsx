import Link from 'next/link';
import * as S from './Footer.style';

const Footer = () => {
  return (
    <>
      <S.FooterContainer>
        <S.FooterBox>
          <S.Copyright>©codeit - 2023</S.Copyright>
          <S.FooterLinks>
            <S.FooterLink href='/privacy'>Privacy Policy</S.FooterLink>
            <S.FooterLink href='/faq'>FAQ</S.FooterLink>
          </S.FooterLinks>
          <S.SNS>
            <Link
              href='https://www.facebook.com/'
              target='_blank'
              rel='noopener noreferrer'>
              <img
                src='/assets/images/sns/facebook.svg'
                alt='facebook 홈페이지로 연결된 facebook 로고'
              />
            </Link>
            <Link
              href='https://twitter.com/'
              target='_blank'
              rel='noopener noreferrer'>
              <img
                src='/assets/images/sns/twitter.svg'
                alt='twitter 홈페이지로 연결된 twitter 로고'
              />
            </Link>
            <Link
              href='https://www.youtube.com/'
              target='_blank'
              rel='noopener noreferrer'>
              <img
                src='/assets/images/sns/youtube.svg'
                alt='youtube 홈페이지로 연결된 youtube 로고'
              />
            </Link>
            <Link
              href='https://www.instagram.com/'
              target='_blank'
              rel='noopener noreferrer'>
              <img
                src='/assets/images/sns/instagram.svg'
                alt='instagram 홈페이지로 연결된 instagram 로고'
              />
            </Link>
          </S.SNS>
        </S.FooterBox>
      </S.FooterContainer>
    </>
  );
};

export default Footer;
