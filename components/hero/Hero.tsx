import Button from "@/components/button/Button";
import * as S from "@/components/hero/Hero.style";
import heroImage from "@/images/intro/hero.png";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <S.HeroWrap>
      <S.Title>
        <S.Highlight>세상의 모든 정보</S.Highlight>를<br /> 쉽게 저장하고
        <S.HeroBr /> 관리해 보세요
      </S.Title>
      <Link href="/user/signup">
        <Button>링크 추가하기</Button>
      </Link>
      <S.HeroImageContainer>
        <Image
          src={heroImage.src}
          width={1200}
          height={800}
          style={{
            width: "100%",
            height: "auto",
          }}
          priority
          alt="Linkbrary 홈페이지 메인화면 예시 이미지"
        />
      </S.HeroImageContainer>
    </S.HeroWrap>
  );
};

export default Hero;
