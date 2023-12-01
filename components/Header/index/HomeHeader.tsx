import { StyledHeader, StyledImage, StyledLink, Title } from "@/components/Header/index/HomeHeader.styled";

export default function HomeHeader() {
  return (
    <>
      <StyledHeader>
        <Title>
          <span>세상의 모든 정보</span>를<br />
          쉽게 저장하고 <br />
          관리해 보세요
        </Title>
        <StyledLink href="/signin">링크 추가하기</StyledLink>
        <StyledImage width={40} height={40} className="section__img grid--img" src="index/_img.svg" alt="링크검색기능 예시이미지" />
      </StyledHeader>
    </>
  );
}
