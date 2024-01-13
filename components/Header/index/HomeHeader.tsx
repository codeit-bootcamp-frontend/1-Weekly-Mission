import { CutLine, StyledHeader, StyledImage, Title, WrapperLink } from "@/components/Header/index/HomeHeader.styled";
import { getCookie } from "@/utils/getCookie";
import Link from "next/link";
import { useRouter } from "next/router";

export default function HomeHeader() {
  const router = useRouter();

  const handleRouting = () => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      router.push("/folder");
      return;
    }
    router.push("/signin");
  };

  return (
    <>
      <StyledHeader>
        <Title>
          <span>세상의 모든 정보</span>를<br />
          쉽게 저장하고 <br />
          관리해 보세요
        </Title>
        <WrapperLink tabIndex={0}>
          <p>구경 해보기</p>
          <button onClick={() => router.push("/shared")}>폴더 공유하기</button>
          <CutLine />
          <button onClick={handleRouting}>링크 추가하기</button>
        </WrapperLink>
        <StyledImage priority width={1} height={1} src="index/_img.svg" alt="링크검색기능 예시이미지" />
      </StyledHeader>
    </>
  );
}
