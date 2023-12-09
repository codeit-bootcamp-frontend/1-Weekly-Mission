import * as S from './Footer.styled';
import facebook from '@/public/images/facebook.svg';
import twitter from '@/public/images/twitter.svg';
import youtube from '@/public/images/youtube.svg';
import instagram from '@/public/images/instagram.svg';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Copyright>©codeit - 2023</S.Copyright>
        <S.Info>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">FAQ</Link>
        </S.Info>
        <S.SNS className="sns">
          <FooterLink sns={facebook} />
          <FooterLink sns={twitter} />
          <FooterLink sns={youtube} />
          <FooterLink sns={instagram} />
        </S.SNS>
      </S.Wrapper>
    </S.Container>
  );
}

type SnsProps = {
  sns: string;
}

function FooterLink({ sns }: SnsProps) {
  return (
    <Link href={`https://www.${sns}.com`}>
      <Image src={sns}  width={20} height={20} alt={sns} />
    </Link>
  );
}
