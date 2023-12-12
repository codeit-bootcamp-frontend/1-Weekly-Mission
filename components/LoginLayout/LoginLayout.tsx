import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LoginForm, SocialButton } from '@/components';
import LogoImg from '@/src/assets/logo.png';
import * as Style from './LoginLayout.style';

interface Props {
  data: {
    p: string;
    href: string;
    link: string;
    button: string;
    text: string;
    formUrl: string;
    require: {};
    isSignup?: boolean;
  };
  children?: ReactNode;
}

export default function LoginLayout({ data, children }: Props) {
  return (
    <Style.Container>
      <Style.Box>
        <Style.TopLogo>
          <Link href="/">
            <Image
              src={LogoImg}
              alt="linkbrary logo"
              width={210}
              height={38}
              priority
            />
          </Link>
          <p>
            {data.p}
            <Link className="login" href={data.href}>
              {data.link}
            </Link>
          </p>
        </Style.TopLogo>
        <LoginForm
          button={data.button}
          formUrl={data.formUrl}
          require={data.require}
          isSignup={data.isSignup}
        >
          {children}
        </LoginForm>
        <SocialButton text={data.text} />
      </Style.Box>
    </Style.Container>
  );
}
