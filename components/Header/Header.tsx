import Image from 'next/image';
import * as S from './Header.style';
import IMAGES from '@/public';
import Link from 'next/link';
import axios from '@/lib/axios';
import { useEffect, useState } from 'react';

interface IUser {
  email: string;
  profileImageSource: string;
}

const Header = () => {
  const [user, setUser] = useState({
    email: '',
    profileImageSource: '',
  } as IUser);

  const getUser = async () => {
    const res = await axios.get(`/api/sample/user`);
    const user = res.data;
    setUser(user);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <S.Container>
      <Link href='/'>
        <Image src={IMAGES.Logo} alt='logo' />
      </Link>

      <S.Profile>
        <S.ProfileImg src={user.profileImageSource} />
        <S.Name>{user.email}</S.Name>
      </S.Profile>
    </S.Container>
  );
};

export default Header;
