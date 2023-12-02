import logo from "@/src/image/logo.svg";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import useGetSampleUser from "../../hooks/useGetSampleUser";
import useGetUser from "../../hooks/useGetUser";
import NavLogin from "./NavLogin";
import NavProfile from "./NavProfile";

interface NavProps {
  pageType: string;
}

const Nav = ({ pageType }: NavProps) => {
  const sharedUser = useGetSampleUser();
  const folderUser = useGetUser();
  const user = pageType === "shared" ? sharedUser : folderUser;

  return (
    <NavBar className={`${pageType}`}>
      <Link href="/">
        <LogoImage src={logo} alt="로고 이미지" />
      </Link>
      {user ? <NavProfile user_data={user} /> : <NavLogin>로그인</NavLogin>}
    </NavBar>
  );
};

const NavBar = styled.nav`
  display: flex;
  padding: 3.3rem 20rem 3.2rem 20rem;
  align-items: center;
  gap: 0.8rem;
  align-self: stretch;
  justify-content: space-between;
  background: var(--bg);

  &.shared {
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 3;
  }

  @media (max-width: 1124px) {
    padding-right: 3.25rem;
    padding-left: 3.25rem;
  }

  @media (max-width: 767px) and (min-width: 375px) {
    padding: 1.8rem 3.2rem 1.7rem 3.2rem;
  }
`;

const LogoImage = styled(Image)`
  width: 13.3rem;
  height: 2.4rem;

  @media (max-width: 767px) and (min-width: 375px) {
    width: 8.8667rem;
    height: 1.6rem;
  }
`;

export default Nav;
