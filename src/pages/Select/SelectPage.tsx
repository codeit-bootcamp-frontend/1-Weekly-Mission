import { Link } from "react-router-dom";
import logoImg from "src/assets/logo.svg";
import { LeftWrapper, Logo, RightWrapper, StyledMain } from "src/pages/Select/SelectPage.styled";

function SelectPage() {
  return (
    <StyledMain>
      <Logo src={logoImg} />
      <LeftWrapper>
        <Link to="/shared">공유된 링크 받기</Link>
      </LeftWrapper>
      <RightWrapper>
        <Link to="/folder">저장된 링크 찾기</Link>
      </RightWrapper>
    </StyledMain>
  );
}

export default SelectPage;
