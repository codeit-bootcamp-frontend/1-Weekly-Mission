import Image from 'next/image';
import google from '@/src/assets/google.png';
import kakao from '@/src/assets/kakaotalk.svg';
import * as Style from './SocialButton.style';

export default function SocialButton({ text }: { text: string }) {
  return (
    <Style.Container>
      <span>{text}</span>
      <Style.Box>
        <Style.ImageBox color="#fff">
          <Image src={google} alt="구글" width={22} height={22} />
        </Style.ImageBox>
        <Style.ImageBox color="#f5e14b">
          <Image src={kakao} alt="카카오" width={22} height={22} />
        </Style.ImageBox>
      </Style.Box>
    </Style.Container>
  );
}
