import Link from "next/link";
import Image from "next/image";
import { useLogin } from "@/lib/utils/AuthContext";
import heroImg from "@/public/hero.png";
import * as Styled from "./Header.styled";

const Header = () => {
  const { isLogin } = useLogin();

  const LinkButtonClick = () => {
    if (!isLogin) {
      alert("로그인을 해주세요.");
    }
  };

  return (
    <Styled.Header>
      <Styled.HeroHeader>
        <Styled.Slogan>
          <Styled.SloganGradient>세상의 모든 정보</Styled.SloganGradient>
          를
          <br />
          쉽게 저장하고 관리해 보세요
        </Styled.Slogan>
        <Styled.LinkButtonBox>
          <Link href={"/share"}>
            <Styled.LinkButton>운영자 링크 구경가기</Styled.LinkButton>
          </Link>
          <Link href={isLogin ? "/folder" : "/"}>
            <Styled.LinkButton onClick={LinkButtonClick}>
              링크 관리 페이지
            </Styled.LinkButton>
          </Link>
        </Styled.LinkButtonBox>
        <Styled.HeroImageBox>
          <Image
            src={heroImg}
            alt="Linkbrary 서비스 소개"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </Styled.HeroImageBox>
      </Styled.HeroHeader>
    </Styled.Header>
  );
};

export default Header;
