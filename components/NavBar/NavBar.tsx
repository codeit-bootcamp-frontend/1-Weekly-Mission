import * as S from "./NavBar.styled";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/images/logo.svg";
import Button from "../Button";
import accountImage from '@/public/images/accountImage.svg'
import axiosInstance from '@/lib/axios';
import { useEffect, useState } from 'react';
import { UserData } from '@/src/types';


export default function NavBar() {
  const [userAccount, setUserAccout] = useState<UserData>();

  const getUser = async () => {
    const res = await axiosInstance.get('/users/1');
    const { data } = res?.data;
    console.log(data);
    const user = data[0];
    console.log(user);
    setUserAccout(user);
  }

  useEffect(() => {
    getUser();
  },[]);

  return (
    <S.Container>
      <S.Wrapper>
        <Link href="/">
          <Image priority={false} src={logoImg} alt="상품 이미지" width={133} height={34} />
        </Link>
        {/* <Button>로그인</Button> */}
        <S.Account>
          <Image src={accountImage} width={28} height={28} alt="계정 이미지" />
          <S.AccountEmail>codeit@naver.com</S.AccountEmail>
        </S.Account>
      </S.Wrapper>
    </S.Container>
  );
}
