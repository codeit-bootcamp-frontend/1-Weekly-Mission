import { LeftWrapper, Logo, RightWrapper, StyledMain } from "@/pages/index.styled";
import Link from "next/link";

function SelectPage() {
  return (
    <StyledMain>
      <Logo src="/logo.svg" />
      <LeftWrapper>
        <Link href="/shared">공유된 링크 받기</Link>
      </LeftWrapper>
      <RightWrapper>
        <Link href="/folder">저장된 링크 찾기</Link>
      </RightWrapper>
    </StyledMain>
  );
}

export default SelectPage;
