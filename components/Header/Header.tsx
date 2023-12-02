import Image from 'next/image';
import * as S from './Header.style';
import logo from '@/public/logo.svg';
import Link from 'next/link';

const Header = () => {
  return (
    <S.Container>
      <Link href='/'>
        <Image src={logo} alt='logo' />
      </Link>

      <S.Profile>
        <S.ProfileImg></S.ProfileImg>
        <S.Name>codeit@codeit.com</S.Name>
      </S.Profile>
    </S.Container>
  );
};

export default Header;
