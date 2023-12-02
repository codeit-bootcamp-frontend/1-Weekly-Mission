import Link from "next/link";
import Image from "next/image";
import { useLogin } from "@/lib/utils/LoginContext";
import heroImg from "@/public/hero.png";
import * as Styled from "./StyledHeader";

const Header = () => {
  const { isLogin } = useLogin();

  return (
    <Styled.Header>
      <Styled.HeroHeader>
        <Styled.Slogan>
          <Styled.SloganGradient>세상의 모든 정보</Styled.SloganGradient>
          를
          <br />
          쉽게 저장하고 관리해 보세요
        </Styled.Slogan>
        <Link href={isLogin ? "/folder" : "/"}>
          <Styled.LinkButton>링크 추가하기</Styled.LinkButton>
        </Link>
        <Styled.HeroImageBox>
          <Image
            src={heroImg}
            alt="Linkbrary 서비스 소개"
            fill
            style={{ objectFit: "cover" }}
          />
        </Styled.HeroImageBox>
      </Styled.HeroHeader>
    </Styled.Header>
  );
};

export default Header;
