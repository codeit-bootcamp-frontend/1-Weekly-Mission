import Link from 'next/link';
import * as S from './Footer.style';
import Image from 'next/image';
import IMAGES from '@/public';

const Footer = () => {
  return (
    <S.Container>
      <S.Text>©codeit - 2023</S.Text>
      <S.LinkContainer>
        <Link href='/' style={{ textDecoration: 'none' }}>
          <S.Text>Privacy Policy</S.Text>
        </Link>
        <Link href='/' style={{ textDecoration: 'none' }}>
          <S.Text>FAQ</S.Text>
        </Link>
      </S.LinkContainer>
      <S.IconContainer>
        <Link href='/'>
          <Image src={IMAGES.Facebook} alt='Facebook' />
        </Link>
        <Link href='/'>
          <Image src={IMAGES.Twitter} alt='Twitter' />
        </Link>
        <Link href='/'>
          <Image src={IMAGES.Youtube} alt='Youtube' />
        </Link>
        <Link href='/'>
          <Image src={IMAGES.Instagram} alt='Instagram' />
        </Link>
      </S.IconContainer>
    </S.Container>
  );
};

export default Footer;
