import { CutLine, StyledHeader, StyledImage, StyledLink, Title, WrapperLink } from "@/components/Header/index/HomeHeader.styled";

export default function HomeHeader() {
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
          <StyledLink href="/shared">폴더 공유하기</StyledLink>
          <CutLine />
          <StyledLink href="/folder">링크 추가하기</StyledLink>
        </WrapperLink>
        <StyledImage priority width={40} height={40} src="index/_img.svg" alt="링크검색기능 예시이미지" />
      </StyledHeader>
    </>
  );
}
