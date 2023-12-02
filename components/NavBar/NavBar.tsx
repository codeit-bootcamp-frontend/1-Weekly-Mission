import * as S from "./NavBar.styled";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/src/assets/images/logo.svg";
import Button from "../Button";

export default function NavBar() {
  return (
    <S.Container>
      <S.Wrapper>
        <Link href="/">
          <Image src={logoImg} alt="상품 이미지" width={133} height={34} />
        </Link>
        <Button>로그인</Button>
      </S.Wrapper>
    </S.Container>
  );
}
