import { CutLine, StyledHeader, StyledImage, Title, WrapperLink } from "@/components/Header/index/HomeHeader.styled";
import Link from "next/link";
import { useRef } from "react";

export default function HomeHeader() {
  const locate = useRef("/signin");
  const accessToken = typeof window !== "undefined" ? sessionStorage.getItem("accessToken") : null;
  if (accessToken) {
    locate.current = `/folder`;
  }

  return (
    <>
      <StyledHeader>
        <Title>
          <span>세상의 모든 정보</span>를<br />
          쉽게 저장하고 <br />
          관리해 보세요
        </Title>
        <WrapperLink>
          <p>구경 해보기</p>
          <Link href="/shared">폴더 공유하기</Link>
          <CutLine />
          <Link href={locate.current}>링크 추가하기</Link>
        </WrapperLink>
        <StyledImage priority width={1} height={1} src="index/_img.svg" alt="링크검색기능 예시이미지" />
      </StyledHeader>
    </>
  );
}
