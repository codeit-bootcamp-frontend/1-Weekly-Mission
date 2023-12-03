import Link from "next/link";
import logo from "src/assets/icons/logo.svg";
import Icon from "src/components/Icon";
import UserInform from "src/components/Profile/UserInform";
import styled from "styled-components";

function Nav() {
  return (
    <StyledWrapper>
      <Link href="/">
        <Icon src={logo} alt="로고" width={100} height={133} />
      </Link>
      <UserInform />
    </StyledWrapper>
  );
}

export default Nav;

const StyledWrapper = styled.nav`
  top: 0;
  background-color: ${({ theme }) => theme.color.blueBackground};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 150px;
  padding: 0 160px;
  z-index: 1;

  @media (max-width: 1199px) and (min-width: 375px) {
    padding: 0 2rem;
  }
`;
