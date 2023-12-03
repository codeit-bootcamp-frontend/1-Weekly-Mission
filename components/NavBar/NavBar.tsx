import * as S from "./NavBar.styled";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/images/logo.svg";
import Button from "../Button";
import accoutImage from '@/public/images/accountImage.svg'

export default function NavBar() {
  return (
    <S.Container>
      <S.Wrapper>
        <Link href="/">
          <Image src={logoImg} alt="상품 이미지" width={133} height={34} />
        </Link>
        {/* <Button>로그인</Button> */}
        <S.Account>
          <Image src={accoutImage} width={28} height={28} alt="계정 이미지" />
          <S.AccountEmail>codeit@codeit.com</S.AccountEmail>
        </S.Account>
      </S.Wrapper>
    </S.Container>
  );
}
