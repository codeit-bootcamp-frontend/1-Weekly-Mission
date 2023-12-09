import Link from 'next/link';
import Image from 'next/image';
import { ThemeProvider } from 'styled-components';
import logoImg from '@/src/assets/logo.png';
import theme from '@/styles/display';
import * as Style from './Nav.style';

type Data = {
  image_source?: string;
  email?: string;
};

export default function Nav({ data }: { data?: Data }) {
  return (
    <ThemeProvider theme={theme}>
      <Style.Nav>
        <Link href='/'><Image src={logoImg} alt="logo" width={133} height={24} priority/></Link>
        <Style.Inform>
          {data?.image_source && <Style.Profile src={data.image_source} />}
          {data?.email ? (
            <span>{data.email}</span>
          ) : (
            <Link href="/signin">로그인</Link>
          )}
        </Style.Inform>
      </Style.Nav>
    </ThemeProvider>
  );
}
