import Link from 'next/link';
import Image from 'next/image';
import LoginInput from '@/components/LoginInput/LoginInput';
import LogoImg from '@/src/assets/logo.png';
import * as Style from './LoginLayout.style';
import SocialButton from '../SocialButton/SocialButton';
import { ReactNode } from 'react';
import LoginForm from '../LoginForm/LoginForm';

interface Props {
  data: { p: string; href: string; link: string; button: string; text: string };
  children?: ReactNode;
}

export default function LoginLayout({ data, children }: Props) {
  return (
    <>
      <Style.Container>
        <Style.Box>
          <Style.TopLogo>
            <Image
              src={LogoImg}
              alt="linkbrary logo"
              width={210}
              height={38}
              priority
            />
            <p>
              {data.p}
              <Link className="login" href={data.href}>
                {data.link}
              </Link>
            </p>
          </Style.TopLogo>
          <LoginForm button={data.button}>{children}</LoginForm>
          <SocialButton text={data.text} />
        </Style.Box>
      </Style.Container>
    </>
  );
}
