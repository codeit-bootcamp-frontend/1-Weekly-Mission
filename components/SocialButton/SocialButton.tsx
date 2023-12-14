import Image from 'next/image';
import Link from 'next/link';
import google from '@/src/assets/google.png';
import kakao from '@/src/assets/kakaotalk.svg';
import * as Style from './SocialButton.style';

export default function SocialButton({ text }: { text: string }) {
  return (
    <Style.Container>
      <span>{text}</span>
      <Style.Box>
        <Link href="https://www.google.com">
          <Style.ImageBox color="#fff">
            <Image src={google} alt="구글" width={22} height={22} />
          </Style.ImageBox>
        </Link>
        <Link href="https://www.kakaocorp.com/page" >
          <Style.ImageBox color="#f5e14b">
            <Image src={kakao} alt="카카오" width={22} height={22} />
          </Style.ImageBox>
        </Link>
      </Style.Box>
    </Style.Container>
  );
}
